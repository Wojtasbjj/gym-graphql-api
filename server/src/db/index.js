const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("server/src/db/db.json");
const db = low(adapter);

const createGymModel = require("./gym");
const createInstructorModel = require("./instructor");
const createUserModel = require("./user");

module.exports = {
  models: {
    Gym: createGymModel(db),
    User: createUserModel(db),
    Instructor: createInstructorModel(db),
  },
  db,
};
