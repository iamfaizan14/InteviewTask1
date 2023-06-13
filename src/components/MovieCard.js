import React from "react";

const MovieCard = (props) => {
  console.log(props.movie);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title"> Title:{props.movie.title}</h5>
                <p className="card-text">Rating:{props.movie.rating}</p>
                <p className="card-text">
                  Release Date{props.movie.releaseDate}
                </p>
                <a href="/" className="btn btn-primary">
                  See full details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
