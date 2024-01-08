const Student = require('./models/Student');
const Room = require('./models/Room');
const Maintenance = require('./models/Maintenance');

exports.seedInitialData = async () => {
  try {
    // Seed students
    const student1 = new Student({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });

    const student2 = new Student({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
    });

    await student1.save();
    await student2.save();

    // Seed rooms
    const room1 = new Room({
      roomNumber: 'C11',
      capacity: 4,
    });

    const room2 = new Room({
      roomNumber: 'D22',
      capacity: 3,
    });

    await room1.save();
    await room2.save();

    console.log('Seed data successfully added to the database.');
  } catch (error) {
    console.error('Error seeding initial data:', error);
  }
};
