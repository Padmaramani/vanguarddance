// Requiring our models folder
var db = require("../models");

module.exports = function(app) {

  //GET route for getting all of the dancers
  app.get("/api/getParents", function(req, res) {
    db.Parent.findAll({})
    .then(function(dbParent) {
      res.json(dbParent);
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
    .then(function(dbParent) {
      res.json(dbParent);
    });
  });

  // Get parents and dancer info
  app.get("/api/parents/", function(req, res) {
    
    db.Dancer.findAll({
      include: [{model: db.Parent}],
      where: {is_active:true
      //  '$Parents.is_active$': true
      }
    }).then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

  // Update Parents info
  app.put("/api/parents/update", function(req, res) {
    
    db.Parent.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbParent) {
      res.json(dbParent);
    });
  });

  //delete parent info - this is a soft delete and only updates the is_active column
  app.delete("/api/parents/delete/:id", function(req, res) {
    
    db.Parent.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbParent) {
      res.json(dbParent);
    });
  });

  //get parent info for a specific dancer
  app.get("/api/parents/select/:DancerId", function(req, res) {
   db.Parent.findAll({
     where: {
       Dancerid: req.params.DancerId,
       is_active:true
     }
   }).then(function(dbParent) {
     res.json(dbParent);
   });
 });  
};