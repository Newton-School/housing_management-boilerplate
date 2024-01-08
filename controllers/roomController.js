const Room = require('../models/Room');
const Student = require('../models/Student');

exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllRoom = async (req, res) => {
  try {
    const room = await Room.find();
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const { roomNumber, capacity } = req.body;

    // Validate request data
    if (!roomNumber || !capacity) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Create a new room
    const newRoom = new Room({ roomNumber, capacity });
    await newRoom.save();

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
    const { roomNumber, capacity } = req.body;

    // Validate request data
    if (!roomNumber || !capacity) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Update the room
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { roomNumber, capacity },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }

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
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);

    if (!deletedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }

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
    const { roomId, studentId } = req.body;

    // Validate request data
    if (!roomId || !studentId) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Check if the room exists
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Check if the student exists
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Add the student to the occupants array
    room.occupants.push(studentId);
    await room.save();

    // Populate occupants and send the response
    await room.populate('occupants').execPopulate();

    res.status(200).json({
      message: 'Occupant added to room successfully',
      room,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
