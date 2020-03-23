import React from 'react';
import styled from 'styled-components'
import $ from 'jquery'
const Movvi = styled.div``
const Search = styled.div``
const Results = styled.div``
const Movie = styled.input``
const Find = styled.button``
const Separator = styled.p`
padding-bottom: 50px;
`
const Poster = styled.img`
width: 100%;
`
const TRL = styled.a`
text-decorations: none;
color: black;
`
const Cast = styled.div`
  height: 5cm;
  overflow: auto;
`
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
      update()
  })
  .catch(err => {
      console.log(err);
  })
}
function findMovie() {
  console.log("Movie: "+$("#movieInput").val())
  getData($("#movieInput").val())
  save($("#movieInput").val())
}

function update() {
  $("#movieTitle").html(movieInfo.title)
  $("#rating").html("<b>Release:</b> " +movieInfo.rating)
  $("#year").html("<b>Release:</b> " +movieInfo.year)
  $("#length").html("<b>Duration:</b> " + movieInfo.length)
  $("#plot").html("<b>Plot: </b>"+movieInfo.plot)
  $("#moviePoster").attr('src', movieInfo.poster)
  $("#trail").attr('href', movieInfo.trailer.link)
  $("#trail").html("watch the trailer")
  $("#cast").show()
  for(var x=0;x<14;x++){
    $("#cast").append("<b>"+movieInfo.cast[x].actor +"</b>"+" - "+movieInfo.cast[x].character+"<br>")
  }
}
function save(movie) {
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  const body = { "Movie": movie }
  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
}

fetch("https://enmlfbmjyaluo.x.pipedream.net/", options)
}
function App() {
  return (
    <div className="movvi app">
      <Movvi>
        <Search class="container">
          <div class="container">
            <div class="wrapper">
              <div st class="row">                  
              <div class="lg-4">
                <center>
                  <h1>MovVI</h1> 
                </center>
              </div>
              <div class="col-8">
              </div>
              </div>            
              <div class="row">                
                <div class="col-sm-3">
                </div>
                <div class="col-sm-6">
                  <center>
                   <Separator>
                      <Movie placeholder="Movie title..." id="movieInput" type="text"></Movie>
                      <Find onClick={findMovie} id="FindMovie">Find</Find>
                   </Separator>
                  </center>
                </div>
                <div class="col-sm-3">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">     
                  <div id="imageHold">
                    <Poster src="" id="moviePoster"></Poster>
                    <TRL id="trail" href=""></TRL>
                  </div>           
                </div>
                <Separator></Separator>
                <div class="col-sm-7">
                  <p>
                    <h2 id="movieTitle"></h2>
                    <a id="rating"></a> <br></br>
                    <a id="year"></a> <br></br>
                    <a id="length"></a> <br></br>                    
                    <p id="plot"></p>
                    <Cast id="CastDiv">
                      <p id="cast"></p>                      
                    </Cast>                
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
