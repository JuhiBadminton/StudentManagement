import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const { mutate, error } = useMutation(
    async () => {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        body: JSON.stringify({ name, username, password, role }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      return data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        navigate('/');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   alert('Passwords do not match');
    //   return;
    // }

    mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      {error && <p>{error.message}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
