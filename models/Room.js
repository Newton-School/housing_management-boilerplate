const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  // - **roomNumber**: String (required, unique) - The unique identifier for the room.
  // - **capacity**: Number (required) - The maximum capacity of the room in terms of occupants.
  // - --**occupants**: Array of ObjectIds (references 'Student') - An array containing the ObjectIds of students occupying the room.
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
