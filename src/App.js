import React from 'react';
import styled from 'styled-components'
import $ from 'jquery'
const Movvi = styled.div``
const Search = styled.div``
const Results = styled.div``
const Movie = styled.input``
const Find = styled.button``
const Poster = styled.image``
var movieInfo = ""
var userMovie = ""
function getData(movie) {
  fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+movie, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "bacd86d576msh7e4f10ea742f8b2p10a49cjsn06a2e594a624"
    }
  })
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      console.log(data)
      movieInfo = data
  })
  .catch(err => {
      console.log(err);
  })
}
function findMovie() {
  console.log("Movie: "+$("#movieInput").val())
  getData($("#movieInput").val())
}
function App() {
  return (
    <div className="movvi app">
      <Movvi>
        <Search class="container">
          <div class="container">
            <div class="wrapper">
              <div class="row">
              TITLE
              </div>
              <div class="row">
                <div class="col-sm-3">
                </div>
                <div class="col-sm-6">
                  <center>
                    <Movie id="movieInput" type="text"></Movie>
                    <Find onClick={findMovie} id="FindMovie">Find</Find>
                  </center>
                </div>
                <div class="col-sm-3">
                </div>
              </div>
              <div class="row">
                <div class="col-5">     
                  <div id="imageHold">
                    <Poster id="moviePoster" alt="img"></Poster>
                  </div>           
                </div>
                <div class="col-7">
                  <p>
                    <h2 id="movieTitle"></h2>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Search>
        <Results>

        </Results>
      </Movvi>
    </div>
  );
}
export default App;
