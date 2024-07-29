const pokedex = require('../pokedex.json')

//get all list of pokemons
const getAllPokemon = async (req, res) => {
  try {
    res.json(pokedex);
  } catch(err) {
    console.error(err);
    res.status(500).json({error: err.message});
  }
};

//get a single pokemon by id
const getPokemonById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const pokemon = pokedex.find(p => p.id === id);

    if (!pokemon) {
      return res.status(404).json({error: 'Pokemon not found'});
    }

    res.json(pokemon);
  } catch(err) {
    console.error(err);
    res.status(500).json({error: err.message});
  }
};

//get a specific info about a pokemon
const getPokemonInfoById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const info = req.params.info;
    const pokemon = pokedex.find(p => p.id === id);

    if (!pokemon) {
      return res.status(404).json({error: 'Pokemon not found'});
    }

    if (!pokemon[info]) {
      return res.status(400).json({error: 'Invalid info provided'});
    }

    res.json({ [info]: pokemon[info] });
  } catch(err) {
    console.error(err);
    res.status(500).json({error: err.message});
  }
};

module.exports = { 
  getAllPokemon,
  getPokemonById,
  getPokemonInfoById};
