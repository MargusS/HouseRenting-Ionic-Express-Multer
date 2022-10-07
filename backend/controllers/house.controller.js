const { DATE } = require('sequelize');
const db = require('../models');
const House = db.house_renting;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.description || !req.body.location || !req.body.rooms || !req.body.wc) {
    res.status(400).send({
      message: "Content cannot be empty"
    })
  }

  const title = req.body.title;
  House.findOne({ where: { title } })
    .then(data => {
      if (data !== null) throw new Error("Name Already Exist");
    })
    .then(() => {
      const house = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location,
        rooms: req.body.rooms,
        wc: req.body.wc,
        createAt: new DATE(),
        ipdateAt: new DATE()
      }

      House.create(house)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          throw new Error("Some error ocurred while creating the house");
        })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

exports.findAll = (req, res) => {
  House.findAll()
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
  const id = req.params.id;
  House.findOne({ where: { id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the house"
      })
    })

}

exports.update = (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.description || !req.body.location || !req.body.rooms || !req.body.wc) {
    res.status(400).send({
      message: "Content cannot be empty"
    })
  }
  const title = req.body.title;
  let exist = House.findOne({ where: { title } })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    })

  const id = req.params.id;
  House.update({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    rooms: req.body.rooms,
    wc: req.body.wc,
    ipdateAt: new DATE()
  }, { where: { id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the house"
      })
    })
}


exports.delete = (req, res) => {
  const id = req.params.id;
  House.destroy({ where: { id } })
    .then(data => {
      res.status(200).send({
        message: "Deleted"
      })
    })
    .catch(err => {
      res.status(500).send({
        message: "Some error ocurred while deleting the house"
      })
    })
}
