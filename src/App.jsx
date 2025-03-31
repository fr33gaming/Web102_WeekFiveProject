import React from 'react';
import './App.css';
import CatCard from './components/CatCard.jsx';

function App() {



  return (
    <div className="App">
      <h1>Kitty Korner</h1>
      <h2>Meet your new furry friend!</h2>
      <p>Click the button below to discover a random cat breed and image!</p>
      <CatCard />
    </div>
  );
};

export default App;
