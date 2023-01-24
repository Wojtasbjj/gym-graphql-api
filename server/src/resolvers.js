module.exports = {
  Query: {
    gyms(_, __, ctx) {
      return ctx.models.Gym.findMany();
    },
  },
  Mutation: {
    createGym(_, { input }, ctx) {
      const newGym = ctx.models.Gym.create(input);
      return newGym;
    },
  },
};
