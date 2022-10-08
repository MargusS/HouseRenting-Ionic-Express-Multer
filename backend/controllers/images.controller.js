const { DATE } = require('sequelize');
const db = require('../models');
const Image = db.images;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log(req.files); // UPLOADED FILE DESCRIPTION RECEIVED
  res.send({
    status: "success",
    message: "Files uploaded successfully",
    data: req.files,
  });
}

exports.findAll = (req, res) => {

}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}


exports.delete = (req, res) => {

}