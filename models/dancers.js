
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
      // Giving the Author model a name of type STRING
     
    });

    
        
    Dancer.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Dancer.hasMany(models.Parents, {
          onDelete: "cascade"
        });
      };
    
  return Dancer;
};