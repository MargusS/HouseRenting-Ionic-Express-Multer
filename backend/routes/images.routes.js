module.exports = app => {
    const image = require('../controllers/images.controller');
    var upload = require('../multer/upload');

    let router = require('express').Router();

    // router.post("/create", upload.single('images'), image.create);
    router.post("/create", upload.array("images", 6), image.create);
    router.get("/lista", image.findAll);
    router.get("/:id", image.findOne);
    router.put("/update/:id", image.update);
    router.delete("/delete/:id", image.delete);

    app.use('/img', router);
}