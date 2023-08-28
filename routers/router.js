let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');


router.get('/', (req,res) => {
    controller.getAllCats(req, res);
});

router.post('/', (req,res)=>{
    controller.postCat(req, res);
});

module.exports = router;