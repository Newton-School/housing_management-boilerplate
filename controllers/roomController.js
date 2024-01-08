const Room = require('../models/Room');
const Student = require('../models/Student');

exports.getRoomById = async (req, res) => {
  try {
    // TODO: Fetch room by ID and send a response
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllRoom = async (req, res) => {
  try {
    // TODO: Fetch all rooms and send a response
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createRoom = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request body (roomNumber, capacity)
    // TODO: Validate request data
    // TODO: Create a new room and send a success response

    res
      .status(201)
      .json({ message: 'Room created successfully', room: newRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request body (roomNumber, capacity)
    // TODO: Validate request data
    // TODO: Update the room and send a success response
    res
      .status(200)
      .json({ message: 'Room updated successfully', room: updatedRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    // TODO: Delete the room by ID and send a success response
    res
      .status(200)
      .json({ message: 'Room deleted successfully', room: deletedRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.addOccupantToRoom = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request body (roomId, studentId)
    // TODO: Add the student to the occupants array
    // TODO: Populate occupants and send the response

    res.status(200).json({
      message: 'Occupant added to room successfully',
      room,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
