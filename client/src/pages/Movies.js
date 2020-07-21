
import movieApi from "../Api/MovieAPI.js";
import React, { useState } from 'react';
const Movies =() => {
  const [movies, setMovies] = useState([]);
  if(movies.length == 0){
    movieApi.searchUpcomingMovies(function(res){

      console.log(res)
      setMovies(res.results)
    }) 
  }

return (





<div>


  <div className="container-1">
    <div className="Leisure For You">
      <br />
      <div className="container">
        <div className="jumbotron">
          <h1>Movies &amp; TV Shows</h1>
          <img src="movieCollage.png" width="100%" className="img-fluid" alt="Responsive image" />
          <h3 className="leisure">Leisure For You</h3>
          <p>Watch your favorite movies, or tv shows. </p>
        </div>
      </div> 
    </div>
    <div className="new releases">
      <h4>Staff Picks</h4>
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
                  <img className="card-img-top" src="spiderman.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Spiderman</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="jaws.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Jaws</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="badboys4life.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Bad Boys For Life</h4>
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
                  <img className="card-img-top" src="gentleman.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">The Gentlemen</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="sopranos.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">The Sopranos Series</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="transformers.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Transformers - Collection</h4>
                    <p className="card-text"></p>
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
                  <img className="card-img-top" src="breakingbad.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Breaking Bad</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="halfbaked.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Half Baked</h4>
                    <p className="card-text"></p>
                    <a className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src="wick.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">John Wick</h4>
                    <p className="card-text"></p>
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


{/* top movies starts */}

<div className="new releases">
      <h4>Top Movies</h4>
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
           
                     {movies.slice(0, 3).map((item)=>{
                   return (
                    <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
                      <div className="card-body">
                   <h4 className="card-title">{item.title}</h4>
                        <p className="card-text"></p>
                        <a className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>


                   )

                     })}
              
              
            </div>
          </div>
          {/*/.First slide*/}
          {/*Second slide*/}
          <div className="carousel-item">
            <div className="row">
             
            {movies.slice(3, 6).map((item)=>{
                   return (
                    <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
                      <div className="card-body">
                   <h4 className="card-title">{item.title}</h4>
                        <p className="card-text"></p>
                        <a className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>


                   )

                     })}
              
            </div>
          </div>
          {/*/.Second slide*/}
          {/*Third slide*/}
          <div className="carousel-item">
            <div className="row">
              
            {movies.slice(6, 9).map((item)=>{
                   return (
                    <div className="col-md-4">
                    <div className="card mb-2">
                      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Card image cap" />
                      <div className="card-body">
                   <h4 className="card-title">{item.title}</h4>
                        <p className="card-text"></p>
                        <a className="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>


                   )

                     })}
            
            </div>
          </div>
          {/*/.Third slide*/}
        </div>
        {/*/.Slides*/}
      </div>
    </div>





    {/* end Top Movies */}






    <div className="new releases">
      <h4>This Week's Pick</h4>
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
export default Movies;