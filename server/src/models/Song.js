module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    albumn: DataTypes.STRING,
    albumnImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })
  return Song
}
