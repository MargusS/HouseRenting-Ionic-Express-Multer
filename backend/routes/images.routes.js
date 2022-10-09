module.exports = app => {
    const image = require('../controllers/images.controller');
    let upload = require('../multer/upload');

    let router = require('express').Router();

    router.get("/lista/:id", image.findAll);
    router.get("/:id", image.findOne);
    router.put("/update/:id", upload.single("image"), image.update);
    router.delete("/delete/:id", image.delete);

    app.use('/img', router);
}