const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.get('/maintenance', maintenanceController.getAllMaintenanceRequests);
router.get('/maintenance/:id', maintenanceController.getMaintenanceRequestById);
router.post('/maintenance', maintenanceController.createMaintenanceRequest);
router.put('/maintenance/:id', maintenanceController.updateMaintenanceRequest);
router.delete(
  '/maintenance/:id',
  maintenanceController.deleteMaintenanceRequest
);

module.exports = router;
