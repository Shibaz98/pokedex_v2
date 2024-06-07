import './SearchResult.css'; 
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';

function SearchResult(props){
    return(
        <div className="SearchResultContainer">
            <PokemonDisplay/> 
        </div>
    );
};

export default SearchResult; 