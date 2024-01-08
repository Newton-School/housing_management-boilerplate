const router = require('express').Router();

router.use('/maintenance', require('./maintenanceRoutes'));
router.use('/room', require('./roomRoutes'));
router.use('/student', require('./studentRoutes'));

module.exports = router;
