var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); 

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");  

//index.handlebars
app.get('*', function (req, res) {
  res.sendFile(require("./client/public/index.html"));   
});

//user.handlebars
app.get('/user/:id', async function (req, res) {

  const albums = await db.Album.findAll({raw: true, where: {UserId: req.params.id}})
  console.log(albums); 

  const movies = await db.Movie.findAll({raw: true, where: {UserId: req.params.id}}) 
  console.log(movies);
  
  res.render('user', {albums, movies});  
}); 


// Requiring our routes
require("./routes/api-routes.js")(app); 
require("./routes/album-api-route.js")(app);
require("./routes/movies-api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }); 
});
