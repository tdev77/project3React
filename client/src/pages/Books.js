import React from "react";
const Books =() => {
return (


<div>

  
  <div className="container-1">
    <div className="Leisure For You">
      <br />
      <div className="container">
        <div className="jumbotron">
          <h1>Books</h1>
          <img src="book_outline.jpg" width="100%" className="img-fluid" alt="Responsive image" />
          <h3 className="leisure">Leisure For You</h3>
          <p>Find your favorite books, within a simple search. </p>
        </div>
      </div> 
    </div>
    <div className="new releases">
      <h4>Hot Picks</h4>
    </div>
    <div className="container">
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        {/*Controls*/}
        <div className="controls-top">
          <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left" /></a>
          <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right" /></a>
        </div>
        {/*/.Controls*/}
        {/*Indicators*/}
        <ol className="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to={0} className="active" />
          <li data-target="#multi-item-example" data-slide-to={1} />
          <li data-target="#multi-item-example" data-slide-to={2} />
        </ol>
        {/*/.Indicators*/}
        {/*Slides*/}
        <div className="carousel-inner" role="listbox">
          {/*First slide*/}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top" src="41qU8PxL5jL._AC_UY218_.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">The Non-Designers Design Book</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="Html5Dummies.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Beginning Html5 &amp; CSS3 For Dummies</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="React.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">React and React Native</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.First slide*/}
          {/*Second slide*/}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top" src="31aX81I6vnL._AC_UY218_.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">HTML &amp; CSS</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="WebDev.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Learning Web Development with React and Bootstrap</h4>
                    <p className="card-text">
                    </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="Think.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Think and Grow Rich</h4>
                    <p className="card-text">
                </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.Second slide*/}
          {/*Third slide*/}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top" src="515k7GcxxvL._AC_UY218_.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="81lXbFj6mTL._AC_UY218_.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="41S+ADl1mZL._AC_UY218_.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
             </p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.Third slide*/}
        </div>
        {/*/.Slides*/}
      </div>
    </div>
    <div className="new releases">
      <h4>Reads of Interests</h4>
    </div>
    <div className="container">
      <div className="card-deck">
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the first card</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the second card</p>
          </div>
        </div>
        <div className="card bg-success">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the third card</p>
          </div>
        </div>
        <div className="card bg-danger">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the fourth card</p>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>

  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</div>

)



}
export default Books;