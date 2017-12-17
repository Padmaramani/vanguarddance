// Requiring our models folder
var db = require("../models");

module.exports = function(app) {

  //GET route for getting all of the dancers
  app.get("/api/getDancers", function(req, res) {
    db.Dancer.findAll({})
    .then(function(dbDancers) {
      res.json(dbDancers);
    });
  });

  // POST route for saving a new dancer
  app.post("/api/addDancer", function(req, res) {
    console.log(req.body);
    db.Dancer.create({
      dancer_name: req.body.dancer_name,
      year_in_school: req.body.year_in_school,
      image_path: req.body.image_path
    })
    .then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

};
