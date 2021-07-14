import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top:10px;
    h1{
        margin-left: auto;
        margin-right: auto;
        text-align:center;
       
    }
`;
function Home() {
  return (
    <Container>
      <h1>Mountain Pictures</h1>

    </Container>
  );
}

export default Home;


