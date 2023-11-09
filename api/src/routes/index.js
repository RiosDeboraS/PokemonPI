const { Router } = require('express');

const handlerGetPokemons=require('../handlers/handlerGetPokemons')
const handlerPost = require('../handlers/handlerPost');
const handlerById = require('../handlers/handlersById');
const handlersName = require('../handlers/handlerGetName');
const getTypeHandlers = require('../handlers/handlerGetType');


const router = Router();
router.post('/create', handlerPost );

router.get('/name', handlersName)
router.get('/pokemons/:id', handlerById);

router.get('/type', getTypeHandlers);
router.get('/pokemons', handlerGetPokemons);











module.exports = router;
