import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Pictures = () => {
  const [photo, setPhoto] = useState('');
  const clientId='2zvfFzOqANPErlr8PMr3Czeev5xpR-NuNawuHPmtsp0';

  const [photos, setPhotos] = useState([]);
  function handleChange(event) {
    setPhoto(event.target.value);
  }
  function handleSubmit(event) {
    console.log(photo);

    const url = `https://api.unsplash.com/photos?page=1&client_id=${clientId}`;
    axios.get(url)
      .then((response) => {
        console.log(response);
        setPhotos(response.data);
      });
  }
  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <Content>
      <Wrap>
        {photos.map(photo => (
          <img key={photo.id} src={photo.urls.full} />
        ))}
      </Wrap>

    </Content>
  );
};

export default Pictures;

const Image = styled.img`
  width: 50px;
  height: 50px
`

const Content = styled.div`
cursor:pointer;
display: flex;
flex-direction: row;
flex-wrap: wrap;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 10px;
grid-row-gap: 5px;
padding: 100px;

`;

const Wrap = styled.div`
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 74%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    width: 50px;
    height: 50px;
    object-fit: cover;

}
&:hover {
    transform: scale(1.05);
    box-shadow: rgb( 0 0 0/ 80%) 0 px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
}
`;
