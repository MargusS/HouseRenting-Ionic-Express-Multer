const { DATE } = require('sequelize');
const db = require('../models');
const Image = db.images;
const Op = db.Sequelize.Op;
const fs = require('fs');

const path = 'public/images/'

exports.create = (req, res) => {
  const houseId = req.params.id;
  const arrImgs = [];
  for (let i of req.files) {
    const image = {
      imgfile: i.filename,
      createAt: new Date(),
      ipdateAt: new Date(),
      houseId: houseId
    }
    arrImgs.push(image)
  }
  let arrCreateImgs = arrImgs.map(function (image) {
    return Image.create(image)
  })
  Promise.all(arrCreateImgs)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating images"
      })
      return
    })
}


exports.findAll = (req, res) => {
  const houseId = req.params.id;
  Image.findAll({ where: { houseId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Not Found"
      })
    })
}


exports.findOne = (req, res) => {
  const houseId = req.params.id;
  Image.findOne({ where: { houseId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Not Found"
      })
    })
}


exports.update = async (req, res) => {
  const id = req.params.id;
  await Image.findOne({ where: { id } })
    .then(data => {
      console.log(path + `${data.imgfile}`)
      fs.unlink(path + `${data.imgfile}`, (err) => {
        if (err) {
          return err.message;
        }
      });
    })
  Image.update({
    imgfile: req.file.filename,
    updateAt: new DATE()
  }, { where: { id } })
    .then(data => {
      res.status(200).send({
        message: "Image updated!"
      })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while updating image"
      })
    })
}


exports.delete = async (req, res) => {
  const id = req.params.id;
  await Image.findOne({ where: { id } })
    .then(data => {
      console.log(path + `${data.imgfile}`)
      fs.unlink(path + `${data.imgfile}`, (err) => {
        if (err) {
          return err.message;
        }
      });
    })
  Image.destroy({ where: { id } })
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