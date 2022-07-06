const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),

  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {},
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6,
  }),

  Author: () => ({
    id: 'a3b6cb28-eeaf-46ef-b2eb-78f1481057e6',
    name: 'Grumpy Cat',
    photo:
      'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
  }),
};

module.exports = mocks;
