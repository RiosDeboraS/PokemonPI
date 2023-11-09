
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    'pokemon',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 
      attack: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },

     

      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

    
 
  

