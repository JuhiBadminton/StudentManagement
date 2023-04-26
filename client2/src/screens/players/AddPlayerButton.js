/* globals window */
import React from 'react';
import { Label, Icon, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const AddPlayerButton = () => {
  const navigate = useNavigate();

  const onAddPlayerClick = e => {
    // window.location.href = "./";
        navigate('/add-player');
  };
  return(
  <div className="json-resume-tool">
    <Label size="big" basic>
      <Icon name="logout" />
      Add Player
    </Label>
    <Button
      content="Add Player"
      size="large"
      fluid
      onClick={onAddPlayerClick}
      style={{
        display: 'block',
        backgroundColor: 'white',
        color: 'black',
      }}
    />
  </div>
)
};

export default AddPlayerButton;
