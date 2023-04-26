import React, { useEffect, useState } from 'react';
import LogoutButton from './auth/LogoutButton';
import ViewPlayers from './players/ViewPlayers';
import AddPlayerButton from './players/AddPlayerButton';
import axios from 'axios';

const Dashboard = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const getPlayers = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/players');
        setPlayers(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getPlayers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <LogoutButton />
      <AddPlayerButton />
      <ViewPlayers players={players}/>
    </div>
  );
};

export default Dashboard;
