// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/dmanage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dancers-manage.html"));
  });

  // app.get("/dancers/add", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/dancers-add.html"));
  // });

  app.get("/dancers/selforupdt", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dancers-selforupdt.html"));
  });

  app.get("/dancers/selforrem", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dancers-selforrem.html"));
  });

  app.get("/dancers/update", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dancers-update.html"));
  });

  app.get("/parents/manage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-manage.html"));
  });

  app.get("/parents/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-add.html"));
  });

  app.get("/parents/selforupdt", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-selforupdt.html"));
  });

  app.get("/parents/selforrem", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-selforrem.html"));
  });

  app.get("/parents/update", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-update.html"));
  });


};