const db = require('../models');
const House = db.house_renting;
const Image = db.images;
const Op = db.Sequelize.Op;
const fs = require('fs');

const path = 'public/images/'

exports.create = (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.description || !req.body.location || !req.body.rooms || !req.body.wc || req.files.length === 0) {
    res.status(400).send({
      message: "Content cannot be empty"
    })
    return;
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
        createAt: new Date(),
        updateAt: new Date()
      }

      const arrImgs = [];

      House.create(house)
        .then(data => {
          for (let i of req.files) {
            const image = {
              imgfile: i.filename,
              createAt: new Date(),
              ipdateAt: new Date(),
              houseId: data.id
            }
            arrImgs.push(image)
          }
          let arrCreateImgs = arrImgs.map(function (image) {
            return Image.create(image)
          })
          Promise.all(arrCreateImgs)
            .catch(err => {
              res.status(500).send({
                message: err.message || "Some error ocurred while creating images"
              })
              return
            })
          res.status(200).send({
            message: "House Created!"
          })
        })
        .catch(err => {
          res.status(500).send({
            message: err.message
          })
          return
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
}


exports.update = (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.description || !req.body.location || !req.body.rooms || !req.body.wc) {
    res.status(400).send({
      message: "Content cannot be empty"
    })
  }
  console.log(req.body.title)
  const title = req.body.title;

  const id = req.params.id;
  House.update({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    rooms: req.body.rooms,
    wc: req.body.wc,
    updateAt: new Date()
  }, { where: { id } })
    .then(data => {
      res.status(200).send({
        message: "Info Updated!"
      })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the house"
      })
    })
}


exports.delete = async (req, res) => {
  const id = req.params.id;
  await Image.findAll({ where: { houseId: id } }).then(data => {
    for (let i of data) {
      console.log(i.dataValues.imgfile)
      fs.unlink(path + `${i.dataValues.imgfile}`, (err) => {
        if (err) {
          return err.message;
        }
      });
    }
  })
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
