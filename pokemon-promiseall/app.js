async function get3Pokemon(){
    const promise1 = axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
    const promise2 = axios.get(`https://pokeapi.co/api/v2/pokemon/2`);
    const results = await Promise.all([promise1,promise2]);
    printPokemon(results);
}

function printPokemon(results){
    for(let pokemon of results){
        console.log(pokemon.data.name);
        console.log("hey");
    }
}

get3Pokemon();
