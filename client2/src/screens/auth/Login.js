import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { mutate, error } = useMutation(
    async () => {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {error && <p>{error.message}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
