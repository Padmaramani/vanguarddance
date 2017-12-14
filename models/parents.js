module.exports = function(sequelize, DataTypes) {
    var Parents = sequelize.define("Parents", {
        parent_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
      // Giving the Author model a name of type STRING
    
    })

      return Parents;
}
