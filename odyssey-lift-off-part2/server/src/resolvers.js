const resolvers = {
  Query: {
    tracksForHome: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
