module.exports = (sequelize, Sequelize) => {
  const House = sequelize.define("house", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT
    },
    location: {
      type: Sequelize.STRING
    },
    rooms: {
      type: Sequelize.INTEGER
    },
    wc: {
      type: Sequelize.INTEGER
    }
    // img_file: {
    //   type: Sequelize.STRING
    // }
  })

  return House;
}