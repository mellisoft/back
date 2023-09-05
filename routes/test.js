const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const testController = require('../controllers/test');
const jsonParser = bodyParser.json();
const multer= require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:'./public/test',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload = multer({
    storage:storage,
}).single('imageUrl');

router.post('/test',upload,testController.testImageUpload);
router.post('/test1',jsonParser,testController.testApi);

module.exports = router;