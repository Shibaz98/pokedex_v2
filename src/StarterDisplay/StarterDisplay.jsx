function StarterDisplay(props){
   
   const handleClick = () =>{
    props.removePokemon(props.pokemon)
   };
   
   
   
    if(!props.pokemon){
        return console.log('error')
    }

    const {name, sprites, types, abilities} = props.pokemon; 
    

    if(!sprites){
        console.log('error: no sprite information'); 
    } else 

    return(
        <div className="PokemonDisplayContainer">
            <div className='button_container'> 
                <h1>Name: {name}</h1>
            </div>
            <img src={sprites.front_default}/>
            <h2>Description:{sprites.front_default ? `This is a ${types[0].type.name} type pokemon. It's first ability is ${abilities[0].ability.name} and the second is ${abilities[1].ability.name}.`: 'Loading...'}</h2>
            <button onClick={handleClick}>Remove</button>
        </div>
    );
};

export default StarterDisplay;