import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Header() {
  const [photo, setPhoto] = useState()
  const [search, setSearch] = useState("");
  console.log({ search })
  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    console.log(photo);
  }

  return (
    <Wrap>
      <Naslov>
        <h1>SnapShot</h1>
      </Naslov>
      <Search>
        <Pretraga>
          <input value={search} onChange={handleChange} type="" placeholder="Search.." />
          <button onClick={handleSubmit}>Search</button>

        </Pretraga>
      </Search>
      <Nav>

        <button>Mouintain</button>
        <button>Beaches</button>
        <button>Birds</button>
        <button>Food</button>
      </Nav>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.div`
margin-top: 150px;

`;
const Search = styled.div`
margin-top: 30px;
`;
const Naslov = styled.div`
font-family: "Times New Roman", Times, serif;
font-size: 30px;
`;
const Pretraga = styled.div`
input {
font-size: 1.25rem;
width: 300px;
height: 30px;
}
button{
    width: 60px;
    height: 30px;
}

`;
const Nav = styled.div`
displey:flex;
margin-top 50px;
color: black;
letter-spacing: 1.42px;
border-radius: 15px; 
color: #F0FFFF;
button{
    padding:20px;
    padding-top 10px;
    padding-bottom 10px;
    margin:10px;
    cursor:pointer; 
    color: #F0FFFF;
    background: #1b1495;
    border-radius: 15px;

}
`;
