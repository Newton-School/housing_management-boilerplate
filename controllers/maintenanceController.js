const Maintenance = require('../models/Maintenance');

exports.getMaintenanceRequestById = async (req, res) => {
  try {
    const maintenanceRequest = await Maintenance.findById(req.params.id);
    if (!maintenanceRequest) {
      return res.status(404).json({ message: 'Maintenance request not found' });
    }
    res.status(200).json(maintenanceRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllMaintenanceRequests = async (req, res) => {
  try {
    const maintenanceRequests = await Maintenance.find();
    res.status(200).json(maintenanceRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createMaintenanceRequest = async (req, res) => {
  try {
    const { description, roomNumber } = req.body;

    // Validate request data
    if (!description || !roomNumber) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Create a new maintenance request
    const newMaintenanceRequest = new Maintenance({
      description,
      roomNumber,
    });
    await newMaintenanceRequest.save();

    res.status(201).json({
      message: 'Maintenance request created successfully',
      maintenanceRequest: newMaintenanceRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateMaintenanceRequest = async (req, res) => {
  try {
    const { description, roomNumber, status } = req.body;

    // Validate request data
    if (!description || !roomNumber || !status) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Update the maintenance request
    const updatedMaintenanceRequest = await Maintenance.findByIdAndUpdate(
      req.params.id,
      { description, roomNumber, status },
      { new: true }
    );

    if (!updatedMaintenanceRequest) {
      return res.status(404).json({ message: 'Maintenance request not found' });
    }

    res.status(200).json({
      message: 'Maintenance request updated successfully',
      maintenanceRequest: updatedMaintenanceRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteMaintenanceRequest = async (req, res) => {
  try {
    const deletedMaintenanceRequest = await Maintenance.findByIdAndDelete(
      req.params.id
    );

    if (!deletedMaintenanceRequest) {
      return res.status(404).json({ message: 'Maintenance request not found' });
    }

    res.status(200).json({
      message: 'Maintenance request deleted successfully',
      maintenanceRequest: deletedMaintenanceRequest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
