const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    track: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getTrack(args.id);
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getModules(parent.id);
    },
  },
};

module.exports = resolvers;
