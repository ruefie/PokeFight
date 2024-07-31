const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Route to get the complete list of pokemon
router.get('/', pokemonController.getAllPokemon);

// Route to get a single pokemon by id
router.get('/:id', pokemonController.getPokemonById);

// Optional route to get a specific info about a pokemon
router.get('/:id/:info', pokemonController.getPokemonInfoById);

module.exports = router;
