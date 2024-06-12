import './Collection.css'; 
import StarterDisplay from '../StarterDisplay/StarterDisplay';

function Collection(props) {


return(
    <div className='collection'>
        <h1>Your Starter Pokemon!</h1>
        <div className='display'>
            {props.starter.map((pokemon, index) =>(
                <StarterDisplay key={index} pokemon={pokemon}/>
            ))}
        </div>         
    </div>
);
};

export default Collection; 