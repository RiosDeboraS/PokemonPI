const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const handlerGetPokemons=require('../handlers/handlerGetPokemons')
const handlerPost = require('../handlers/handlerPost');
const handlerById = require('../handlers/handlersById');
const handlersName = require('../handlers/handlerGetName');
const handlerType = require('../handlers/handlerGetType');


const router = Router();
router.post('/create', handlerPost );
router.get('/name', handlersName)
router.get('/pokemons/:id', handlerById);
router.get('/type', handlerType);
router.get('/pokemons', handlerGetPokemons);











module.exports = router;
