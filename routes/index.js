/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'GLOBALVIEW Sites',
    description: 'Description',
    author: 'Ethan Lew'
  });
};
