// import React, { useState } from 'react';
// import axios from 'axios';

// function AddPlayerForm() {
//   const [name, setName] = useState('');
//   const [level, setLevel] = useState('');
//   const [age, setAge] = useState('');
//   const [plan, setPlan] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [existingPlayer, setExistingPlayer] = useState(null);

//   async function handleSubmit(event) {
//     event.preventDefault();

//     // try {
//     //   const response = await axios.get(`http://localhost:3001/api/players/${name}`);
//     //   console.log(response.data);
//     // } catch (error) {
//     //   if (error.response && error.response.status === 400 && error.response.data.message === 'Player already exists') {
//     //     setExistingPlayer(error.response.data.player);
//     //     setShowConfirmation(true);
//     //   } else {
//     //     console.error(error);
//     //   }
//     // }
//     try {
//       const response = await axios.get(`http://localhost:3001/api/players/${name}`);
//       setExistingPlayer(!!response.data);
//     } catch (error) {
//       console.error(error);
//     }

//   }

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleLevelChange(event) {
//     setLevel(event.target.value);
//   }

//   function handleAgeChange(event) {
//     setAge(event.target.value);
//   }

//   function handlePlanChange(event) {
//     setPlan(event.target.value);
//   }

//   function handleStartDateChange(event) {
//     setStartDate(event.target.value);
//   }

//   async function handleConfirmation() {
//     try {
//       const response = await axios.post('http://localhost:3001/api/players', { name, level, age, plan, startDate, force: true });
//       console.log(response.data);
//       setExistingPlayer(null);
//       setShowConfirmation(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function handleCancel() {
//     setExistingPlayer(null);
//     setShowConfirmation(false);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={handleNameChange} />

//         <label htmlFor="level">Level:</label>
//         <input type="number" id="level" value={level} onChange={handleLevelChange} />

//         <label htmlFor="age">Age:</label>
//         <input type="number" id="age" value={age} onChange={handleAgeChange} />

//         <label htmlFor="plan">Plan:</label>
//         <input type="text" id="plan" value={plan} onChange={handlePlanChange} />

//         <label htmlFor="startDate">Start Date:</label>
//         <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />

//         <button type="submit">Add Player</button>
//       </form>

//       {showConfirmation && (
//         <div>
//           <p>{`A player with the name ${existingPlayer.name} already exists.`}</p>
//           <p>{`Level: ${existingPlayer.level}, Age: ${existingPlayer.age}, Plan: ${existingPlayer.plan}, Start Date: ${existingPlayer.startDate}`}</p>
//           <p>Do you still want to add this player?</p>
//           <button onClick={handleConfirmation}>Confirm</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddPlayerForm;

import axios from 'axios';
import { useState } from 'react';
import MyModal from './MyModal';
import { useNavigate } from 'react-router-dom';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [age, setAge] = useState('');
  const [plan, setPlan] = useState('');
  const [startDate, setStartDate] = useState('');
  const [playerExists, setPlayerExists] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleButtonClick() {
    console.log('Button clicked!');
    axios.post('http://localhost:3001/api/players', { name, level, age, plan, startDate })
         .then((res) => {
            console.log("Player added");
            navigate('/dashboard');
         })
          .catch((err) => {
            console.log("Cant add player");
         })
         handleCloseModal();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // Set it up for lowercase and upper case or use Sentence case for all names while post and get
    await axios.get(`http://localhost:3001/api/players/${name}`)
          .then((response) => {
            console.log(response.data);
            // alert("User already exists");
            handleOpenModal();
          })
          .catch((error) => {
            console.log(error);
            console.log("Couldn't find the user");
             axios.post('http://localhost:3001/api/players', { name, level, age, plan, startDate })
             .then((res) => {
              console.log("Player added");
              navigate('/dashboard');
             })
             .catch((err) => {
              console.log("Cant add player");
             })
          })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

      <label htmlFor="level">Level:</label>
      <input type="text" id="level" value={level} onChange={event => setLevel(event.target.value)} />

      <label htmlFor="age">Age:</label>
      <input type="text" id="age" value={age} onChange={event => setAge(event.target.value)} />

      <label htmlFor="plan">Plan:</label>
      <input type="text" id="plan" value={plan} onChange={event => setPlan(event.target.value)} />

      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" value={startDate} onChange={event => setStartDate(event.target.value)} />

      <button type="submit">Add Player</button>

      {playerExists && (
        <p>A player with the name {name} already exists. Please choose a different name.</p>
      )}
    {/* {isOpen && (     
         <div className="modal">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
            <button onClick={handleButtonClick}>Button 1</button>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>
        </div>
        )} */}
      <div>
        {/* <button onClick={handleOpen}>Open Modal</button> */}
        <MyModal 
          isOpen={isOpen}
          onClose={handleCloseModal}
          handleButtonClick={handleButtonClick}
          handleCloseModal={handleCloseModal}
          title="Player already exists">
          <p>This is the content of my modal.</p>
        </MyModal>
      </div>
    </form>

  );
}

export default AddPlayerForm;
