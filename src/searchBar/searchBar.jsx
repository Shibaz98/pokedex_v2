import React, { useState } from 'react';

function SearchBar(props){
    

    const [searchTerm, setSearchTerm] = useState('')
    
    const handleChange = (event) =>{
        setSearchTerm(event.target.value.toLowerCase())
        console.log(searchTerm)
    }


    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button>Search</button>
        </div>
    )
};

export default SearchBar; 

