import './App.css';
import React, { useState } from 'react';
import SearchBar from './searchBar/searchBar';

function App() {



const search = (term) =>{

};

  return (
    <div className="App">
      <h1>React Pokedex-v2</h1>
      <SearchBar search={search}/> 
    </div>
  );
}

export default App;
