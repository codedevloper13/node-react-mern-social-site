const Post = require('../models/post');
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

exports.createPosts = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      post: result,
    });
  });
};
