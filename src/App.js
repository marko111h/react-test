import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ImageLinkForm from './components/ImageLinkForm';
import Pictures from './components/Pictures';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ImageLinkForm />
      <Pictures />
      {/* <NavBar /> */}
      {/* {result.map((photo) =>(
                  
               ) )} */}
    </div>
  );
}

export default App;
