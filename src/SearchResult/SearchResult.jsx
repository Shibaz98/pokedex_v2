import './SearchResult.css'; 
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';

function SearchResult(props){
    return(
        <div className="SearchResultContainer">
            <PokemonDisplay pokemon={props.pokemon} getPokemon={props.getPokemon}/> 
        </div>
    );
};

export default SearchResult; 