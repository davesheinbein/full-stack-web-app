// const Favorite = require('../models/favorites');
// const Video = require('../models/video');
// const Gif = require('../models/gif')
// const Video = require('../models/video');

// module.exports = {
//   index,
//   show
// };

// function index(req, res) {
//   let user = null
//   if(req.user) {
//     user = req.user
//   }
//     Favorite.find({}, function(err, favorites) {
//       res.render('videos/index', 
//       {
//         videos, 
//         title: 'Favorites', 
//         user
//       });
//     });
// }

// function show(req, res) {
//     User.findById(req.params.id, function(err, gif) {
//         Video.find({video : video._id}, function(err, videos) {
//             res.render('/videos/show', { title: 'Video Details', video, videos});
//             Gif.find({gif : gif._id}, function(err, gifs) {
//                 res.render('/gifs/show', { title: 'Gif Details', gif, gifs});
//       });
//     });
// }
