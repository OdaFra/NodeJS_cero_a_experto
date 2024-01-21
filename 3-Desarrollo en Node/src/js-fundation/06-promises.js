const { http } = require('../plugins') 


const getPokemonById = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);
  
  return pokemon.name


  // const resp = await fetch(url);
  // const pokemon = await resp.json() 
 //   throw new Error("Pokemon no existe");
  // return fetch(url)
  //   .then((res) => res.json())
  //   // .then(() => {
  //   //   throw new Error("Pokemon no existe");
  //   // })
  //   .then((pokemon) => pokemon.name);
};

module.exports = getPokemonById;
