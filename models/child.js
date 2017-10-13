module.exports = function (sequelize, DataTypes) {
  var Child = sequelize.define("child", {
    child_LASTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    CHILD_FIRSTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    CHILD_MIDDLEINT: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  return Child;
};