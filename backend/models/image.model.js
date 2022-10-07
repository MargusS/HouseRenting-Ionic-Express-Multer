module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {
        imgfile: {
            type: Sequelize.STRING
        }
    })
    return Image;
}