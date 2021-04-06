import React from 'react';

const MovieImage = props => {
  return (
    <div className="card border m-3 shadow">
      <img className="card-img-top" src={props.source} alt="No content" />
    </div>
  )
}

const MovieTitle = props => {
  return (
    <div className="card bg-light m-3">
      <div className="card-body">
        <p className="card-text" >{props.title}</p>
      </div>
    </div>
  )
}

const Movie = props => {
  const imgStyle = { width: 200 };
  return (
    <div id={props.id} className="mx-auto" style={imgStyle}>
      <MovieImage source={props.imgSource} />
      <MovieTitle title={props.movieName} />
    </div>
  )
}


class Movies extends React.Component {

  createMovie() {
    const movies = [];
    for (let i=0; i<5; i++) {
      movies.push(<Movie key={i+845964} id='' imgSource='' movieName='No content' />)
    } 

    const suggestedMovies = this.props.suggestedMovies;
    console.log("suggestedMovies: ", suggestedMovies);
    for (let i=0; i < suggestedMovies.length && i < 5; i++) {
      console.log("suggestedMovies[i].id: ", suggestedMovies[i]["$"].id)
      movies[i] = <Movie 
        key={suggestedMovies[i]["$"].id} 
        id={suggestedMovies[i]["$"].id} 
        imgSource={window.location.origin + suggestedMovies[i].imagePath} 
        movieName={suggestedMovies[i].name} 
      />
    }
    console.log("movies: ", movies);
    return movies;
  }

  render() {
    return (
      <div id="suggested-movies" className="row text-center m-auto w-75">
        {this.createMovie()}
      </div>
    )
  }
}

export default Movies;