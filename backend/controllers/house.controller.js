const db = require('../models');
const House = db.house_renting;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content cannot be empty"
    })
  }

  const house = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    rooms: req.body.rooms,
    wc: req.body.wc
  }

  House.create(house)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the house"
      })
    })
}

exports.findAll = (req, res) => {
  House.finfAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the house"
      })
    })

}

exports.findOne = (req, res) => {

}
exports.update = (req, res) => {

}
exports.delete = (req, res) => {

}
