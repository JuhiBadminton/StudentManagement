/* globals window */
import React from 'react';
import { Label, Icon, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const onLogoutClick = e => {
    // window.location.href = "./";
        navigate('/');
    localStorage.removeItem('jwtToken');
  };
  return(
  <div className="json-resume-tool">
    <Label size="big" basic>
      <Icon name="logout" />
      Logout
    </Label>
    <Button
      content="Logout"
      size="large"
      fluid
      onClick={onLogoutClick}
      style={{
        display: 'block',
        backgroundColor: 'white',
        color: 'black',
      }}
    />
  </div>
)
};

export default LogoutButton;
