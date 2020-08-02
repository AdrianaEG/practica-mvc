const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroesControllers');

router.get('/', controller.index);

router.get('/:id', controller.getById);


router.get('/:id/:resenia?', controller.getByResenia);

module.exports = router;