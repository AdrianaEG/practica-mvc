const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainControllers');

router.get('/', controller.index);
router.get('/comentarios', controller.comentarios);

module.exports = router;