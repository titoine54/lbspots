module.export = {
  index: function(req, res, next) {
  var id = req.params.id;
  myCollection.forge()
  .fetch()
  .then(function (collection) {
    res.json(collection.toJSON());
  })
  .otherwise(function (error) {
    res.status(500).json({msg: error.message});
  });
},
}
