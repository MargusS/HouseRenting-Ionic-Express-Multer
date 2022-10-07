module.exports = app => {
  const house = require('../controllers/house.controller');

  let router = require('express').Router();

  router.post("/create", house.create);
  // router.get("/lista", house.findAll);
  router.get("/:id", house.findOne);
  router.put("/update/:id", house.update);
  router.delete("/delete/:id", house.delete);

  app.use('/house', router);
}