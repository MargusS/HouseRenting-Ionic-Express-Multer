module.exports = app => {
  const house = require('../controllers/house.controller');

  let router = require('express').Router();

  router.post("/", house.create);
  router.get("/", house.findAll);
  router.get("/:id", house.findOne);
  router.put("/:id", house.update);
  router.delete("/:id", house.delete);

  app.use('/house', router);
}