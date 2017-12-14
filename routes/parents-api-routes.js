// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/parents/", function(req, res) {
    db.Parents.findAll(
    { attributes: ['id','parent_name', 'email', 'phone_no', 'is_active' ],
      where: {is_active:true}
  }
)
  
    .then(function(dbParents) {
      res.json(dbParents);
    });
  });

};
