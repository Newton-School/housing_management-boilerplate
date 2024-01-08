const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/rooms', roomController.getAllRoom);
router.post('/rooms', roomController.createRoom);
router.get('/:id', roomController.getRoomById);
router.delete('/delete/:id', roomController.deleteRoom);
router.patch('/update/:id', roomController.updateRoom);
router.post('/occupants', roomController.addOccupantToRoom);

module.exports = router;
