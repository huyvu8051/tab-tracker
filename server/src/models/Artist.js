module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  })

  return Artist
}
