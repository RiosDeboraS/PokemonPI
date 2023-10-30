const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Type', {
      id: { 
        tableName: 'Type',
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false, 
      freezeTableName: true,
    });
    

    
  
    
};
