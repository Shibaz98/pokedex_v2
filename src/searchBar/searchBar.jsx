import React, { useState } from 'react';

function SearchBar(props){
    

    const [searchTerm, setSearchTerm] = useState('')
    
    const handleChange = (event) =>{
        setSearchTerm(event.target.value.toLowerCase())
    }

    const handleClick = () =>{
        props.search(searchTerm)
    };

    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )
};

export default SearchBar; 

