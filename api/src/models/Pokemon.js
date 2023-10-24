
const { DataTypes, UUIDV4 } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
 sequelize.define('pokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    Id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      PrimaryKey: true,
    },
    
    image: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    
   life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    speed: {
      type: DataTypes.INTEGER,
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
  }, {
    timestamps: false, // Opciones del modelo: desactiva los timestamps created_at y updated_at
    freezeTableName: true,
  });

};


    
 
  

