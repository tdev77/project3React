import React from "react";

var Home = () => {
  return (
    <div>
      
     
     
     
      <div className="container-1">
        <div className="LeisureForYou">
          <h1>Leisure For You</h1>
          <h5>Stream Music, Movies, and Books</h5>
        </div>
        <div className="container">
   
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div
              className="carousel-inner"
              style={{
                width: "100%",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
            >
              <div className="carousel-item active">
                <img
                  className="d-block carousel-image"
                  src="BEYONCE.png"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block carousel-image"
                  src="lil-Baby.png"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block carousel-image"
                  src="BILLIE_EILISH.png"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block carousel-image"
                  src="theweeknd.png"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block carousel-image"
                  src="POP_SMOKE.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            data-slide="prev"
          >
            {" "}
            <span className="sr-only">Previous</span>{" "}
          </a>{" "}
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            data-slide="next"
          >
            {" "}
            <span className="sr-only">Next</span>{" "}
          </a>
       
        </div>
        <div className="container-2">
          <div className="movies">
            <h2>Movies</h2>
            <hr noshade="noshade" size={3} width="50%" />
          </div>
          <div className="carousel slide" data-ride="carousel">
            <div
              className="carousel-inner"
              style={{
                width: "36%",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
            >
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="71fWQdAb5gL._AC_UY218_.jpg"
                      alt="1 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="71onlDHdUML._AC_UY218_.jpg"
                      alt="2 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="71KwxsmxUwL._AC_UY218_.jpg"
                      alt="3 slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="71z-b+bdN-L._AC_UY218_.jpg"
                      alt="4 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="81y58-PDbRL._AC_UY218_.jpg"
                      alt="5 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="81inHy8Q8GL._AC_UY218_.jpg"
                      alt="6 slide"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="container-3">
        <div className="books">
          <h2>Books</h2>
          <hr noshade="noshade" size={3} width="50%" />
        </div>
        <div className="container">
          <div className="carousel slide" data-ride="carousel">
            <div
              className="carousel-inner"
              style={{
                width: "38%",
                "margin-left": "auto",
                "margin-right": "auto",
              }}
            >
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="41qU8PxL5jL._AC_UY218_.jpg"
                      alt="1 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="71cN1-4ZCpL._AC_UY218_.jpg"
                      alt="2 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="41S+ADl1mZL._AC_UY218_.jpg"
                      alt="3 slide"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="815HkcW9zUL._AC_UY218_.jpg"
                      alt="4 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="31aX81I6vnL._AC_UY218_.jpg"
                      alt="5 slide"
                    />
                  </div>
                  <div className="col-sm">
                    <img
                      className="d-block w-100"
                      src="515k7GcxxvL._AC_UY218_.jpg"
                      alt="6 slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-4">
        <div className="row">
          <div className="col text-center">
            <h5>Listen to Music</h5>
            <img
              style={{ "max-width": "40%" }}
              src="woman_listening2music.jpg"
              alt
            />
          </div>
          <div className="col text-center">
            <h5>Watch Movies</h5>
            <img style={{ "max-width": "40%" }} src="watchmovies.jpg" alt />
          </div>
          <div className="col text-center">
            <h5>Read Books</h5>
            <img style={{ "max-width": "40%" }} src="reading.jpg" alt />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;