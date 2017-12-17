// Requiring our models folder
var db = require("../models");

module.exports = function(app) {

  //GET route for getting all of the dancers
  app.get("/api/getParents", function(req, res) {
    db.Parent.findAll({})
    .then(function(dbParents) {
      res.json(dbParents);
    });
  });

  // POST route for saving a new parent
  app.post("/api/addParent", function(req, res) {
    console.log(req.body);
    db.Parent.create({
      parent_name: req.body.parent_name,
      email: req.body.email,
      phone_no: req.body.phone_no,
      DancerId: req.body.DancerId
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

};