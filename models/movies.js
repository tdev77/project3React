module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }, 
      listened: {
        type: DataTypes.BOOLEAN, 
        defaultValue: '0'
      }, 
      review: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  
    Movie.associate = function(models) {
      Movie.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Movie;
  };
  