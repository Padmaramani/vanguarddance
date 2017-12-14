module.exports = function(sequelize, DataTypes) {
    var Dancer = sequelize.define("Dancer", {
        dancer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year_in_school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
     
    })

    Dancer.associate = function(models) {
        // Associating Dancer with Parents
        // When an Dancer is deleted, also delete any associated Parents
        Dancer.hasMany(models.Parents, {
          onDelete: "cascade"
        });
    };
    
    return Dancer;
  
  };

  