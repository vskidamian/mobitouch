import React from 'react';
//styling and animation
import styled from 'styled-components';

//images 
import logo from '../images/logo.png';

const Header = () => {
  return (
    <HeaderElement>
      <img src={logo} alt="Logo" />
    </HeaderElement>
  );
}

const HeaderElement = styled.div`
  display: block;
  text-align: center;
  margin: 36.5px 0 16px 0;
`;

export default Header;