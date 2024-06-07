import './App.css';
import React, { useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './SearchResult/SearchResult';

function App() {



const search = (term) =>{
  console.log(term)
};

  return (
    <div className="App">
      <h1>React Pokedex-v2</h1>
      <SearchBar search={search}/> 
      <div className='SearchResultSection'>
        <SearchResult/>
      </div>
    </div>
  );
}

export default App;
