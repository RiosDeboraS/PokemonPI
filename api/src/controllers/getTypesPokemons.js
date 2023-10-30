const axios = require('axios');
const { Type } = require('../db'); 

const getTypes = async () => {
  // Verifica si la base de datos está vacía
  const typesFromDB = await Type.findAll();

  if (typesFromDB.length === 0) {
    // Si la base de datos está vacía, obtén los tipos de la API
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const typesApi = response.data.results;

    const typesInsert = typesApi.map(async (typeApi) => {
      const typeExists = await Type.findOne({ where: { name: typeApi.name } }); // Corregido aquí
      if (!typeExists) {
        const type = await Type.create({ name: typeApi.name });
        return type;
      }
      return typeExists; 
    });
    // Espera a que se completen todas las inserciones
    const insertedTypes = await Promise.all(typesInsert);

    return insertedTypes;
  }

  // Si la base de datos no está vacía, simplemente devuelve los tipos de la base de datos
  return typesFromDB;
};

module.exports = getTypes;