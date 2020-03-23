import React from 'react';
import styled from 'styled-components'
const Movvi = styled.div``
const Search = styled.div``
const Results = styled.div``
const Movie = styled.input``
const Find = styled.button``
const Poster = styled.image``
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
                    <Find>Find</Find>
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
