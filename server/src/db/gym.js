const nanoid = require("nanoid");

const createGymModel = (db) => {
  return {
    findMany(filter) {
      return db.get("gym").filter(filter).value();
    },

    findOne(filter) {
      return db.get("gym").find(filter).value();
    },

    create(gym) {
      const newGym = { id: nanoid(), createdAt: Date.now(), ...gym };

      db.get("gym").push(newGym).write();

      return newGym;
    },
  };
};

module.exports = createGymModel;
