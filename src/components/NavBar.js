import React from 'react';
import styled from 'styled-components';

function NavBar() {
  return (
    <Nav>
      <span>Mouintain</span>
      <span>Beaches</span>
      <span>Birds</span>
      <span>Food</span>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.div`
color: black;
`;
