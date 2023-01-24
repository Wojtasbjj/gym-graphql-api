const nanoid = require("nanoid");

const createInstructorModel = (db) => {
  return {
    findMany(filter) {
      return db.get("instructor").filter(filter).value();
    },

    findOne(filter) {
      return db.get("instructor").find(filter).value();
    },

    create(instructor) {
      const newInstructor = {
        id: nanoid(),
        createdAt: Date.now(),
        ...instructor,
      };

      db.get("instructor").push(newInstructor).write();

      return newInstructor;
    },
  };
};

module.exports = createInstructorModel;
