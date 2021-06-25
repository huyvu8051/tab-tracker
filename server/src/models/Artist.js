module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING
  })
  return Artist
}
