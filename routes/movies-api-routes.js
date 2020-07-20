var db = require("../models");  

module.exports = function(app) { 

  // Get route for retrieving a single Movie
  app.get("/api/movies/:id", function(req, res) {
    db.Movie.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMovie) {
      console.log(dbMovie);
      res.json(dbMovie);
    });
  });

    // PUT route for updating Movies
    app.put("/api/movies", function(req, res) {
        db.Movie.update(req.body,
          {
            where: {
              listened: '1'
            }
          }).then(function(dbMovie) {
          res.json(dbMovie);
        });
      });

     // DELETE route for deleting Movies 
     app.delete("/api/movies/:id", function(req, res) {
        db.Movie.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbMovie) {
          res.json(dbMovie);
        });
      });
      
     // POST route for saving a new Movie
     app.post("/api/movies", function(req, res) {
        db.Movie.create(req.body).then(function(dbMovie) {
          res.json(dbMovie);
        });
      });
    }
