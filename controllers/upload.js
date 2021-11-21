const fs = require("fs");

const db = require("../models");
const Image = db.Image;
var path = require('path');
let reqPath = path.join(__dirname, '../');
const uploadFiles = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                reqPath+"/resources/static/assests/uploads/"+req.file.filename
            ),
        }).then((image) => {
            fs.writeFileSync(
                reqPath + "/resources/static/assests/tmp/" + image.name,
                image.data
            );

            return res.send(`File has been uploaded.`);
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};