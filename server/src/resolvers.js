module.exports = {
  Query: {
    gyms(_, __, ctx) {
      return ctx.models.Gym.findMany();
    },
    instructors(_, __, ctx) {
      return ctx.models.Instructor.findMany();
    },
  },
  Mutation: {
    createGym(_, { input }, ctx) {
      const newGym = ctx.models.Gym.create(input);
      return newGym;
    },
    createInstructor(_, { input }, ctx) {
      const newInstructor = ctx.models.Instructor.create(input);
      return newInstructor;
    },
  },
};
