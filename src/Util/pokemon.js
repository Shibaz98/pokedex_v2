//GET https://pokeapi.co/api/v2/ability/{id or name}/

const pokemon = {
     search(term){
       return fetch(`https://pokeapi.co/api/v2/pokemon/${term}/`)
        .then(response =>{
            if(response.ok){
                return response.json();

            } else{
                console.log('error')
            }
        }).then(jsonResponse => jsonResponse)
    } 
}

export default pokemon; 