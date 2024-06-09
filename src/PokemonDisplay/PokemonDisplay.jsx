import './PokemonDisplay.css'; 


function PokemonDisplay(props){
    
    if(!props.pokemon){
        return console.log('error')
    }
    
    console.log(props.pokemon)

    const {name, sprites} = props.pokemon; 

    if(!sprites){
        console.log('error: no sprite information'); 
    } else 

    return(
        <div className="PokemonDisplayContainer">
            <h1>Name: {name}</h1>
            <img src={sprites.front_default}/>
            <h2>Description:</h2>
        </div>
    );
};

export default PokemonDisplay; 