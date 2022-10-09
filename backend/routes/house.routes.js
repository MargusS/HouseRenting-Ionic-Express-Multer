module.exports = app => {
  const house = require('../controllers/house.controller');
  let upload = require('../multer/upload');

  let router = require('express').Router();

  router.post("/create", upload.array("images", 6), house.create);
  router.get("/lista", house.findAll);
  router.get("/:id", house.findOne);
  router.put("/update/:id", upload.array("images", 6), house.update);
  router.delete("/delete/:id", house.delete);

  app.use('/house', router);
}