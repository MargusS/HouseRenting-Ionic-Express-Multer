module.exports = (sequelize, Sequelize) => {
  const House = sequelize.define("house", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rooms: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    wc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
    // img_file: {
    //   type: Sequelize.STRING
    // }
  })

  return House;
}