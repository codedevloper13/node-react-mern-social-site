exports.getPosts = (req, res) => {
  res.json({
    posts: [
      {
        title: 'First Json',
      },
      {
        title: 'second JS',
      },
    ],
  });
};
