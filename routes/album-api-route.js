var db = require("../models");  

module.exports = function(app) { 


  // Get route for retrieving a single album
  app.get("/api/albums/:id", function(req, res) {
    db.Album.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAlbum) {
      console.log(dbAlbum);
      res.json(dbAlbum);
    });
  });

    // PUT route for updating albums
    app.put("/api/albums", function(req, res) {
        db.Album.update(req.body,
          {
            where: {
              listened: '1'
            }
          }).then(function(dbAlbum) {
          res.json(dbAlbum);
        });
      });

     // DELETE route for deleting albums 
     app.delete("/api/albums/:id", function(req, res) {
        db.Album.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbAlbum) {
          res.json(dbAlbum);
        });
      });
      
     // POST route for saving a new album
     app.post("/api/albums", function(req, res) {
        db.Album.create(req.body).then(function(dbAlbum) {
          res.json(dbAlbum);
        });
      });
    }
