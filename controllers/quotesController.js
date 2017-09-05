var Article = require("../models/article");

module.exports = {
  // This method handles retrieving quotes from the db
  index: function(req, res) {
    console.log("IT RAN");
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Article.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
        console.log(res);
      });
  },
  // This method handles creating new quotes
  create: function(req, res) {
    console.log(req.body);
    var titleField = req.body.text;
    Article.create({title: titleField}).then(function(doc) {
      console.log(doc);
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating quotes
  update: function(req, res) {
    Article.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting quotes
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
