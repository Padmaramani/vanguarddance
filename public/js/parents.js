var db = require("../models");

module.exports = function(app) {
  
    app.post("/api/parents/add", function(req, res) {
        db.Parents.create(req.body).then(function(dbParents) {
          res.json(dbAuthor);
        });
      });
  
    app.get("/api/parents/select", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Parents.findAll({
      include: [db.Post]
    }).then(function(dbParent) {
      res.json(dbParent);
    });
  });

  app.get("/api/parents/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Parents.findOne({
      where: {
        id: req.params.id
      },
      include: [db.id]
    }).then(function(dbParents) {
      res.json(dbParents);
    });
  });


  app.delete("/api/parents/:id", function(req, res) {
    db.Parents.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbParents) {
      res.json(dbParents);
    });
  });


  // PUT route for updating posts
  app.put("/api/parents/update", function(req, res) {
    db.Parents.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbParents) {
      res.json(dbParents);
    });
  });
};


};
