function ItunesController(){

  var itunesService = new ItunesService()
  
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(results){
    scrollTo( 0, 0)
    var template = ``
    for (let i = 0; i < results.length; i++){
      var song = results[i]
     template +=`
    <div class="col-sm-4 my-3">
     <div class="card w-100 h-100">
         <img class="card-img-top" src="${song.albumArt}" alt="">    
         <div class="card-body">
             <h2 class="card-title">Title: ${song.title} </h2>
             <h3 class="card-text"> Collection: ${song.collection}</h3>
             <h3 class="card-text">Artist: ${song.artist}</h3>
             <h4 class="card-text">Price: $${song.price}</h4>
             <audio class="" name="preview" controls src="${song.preview}"></audio>
          </div>
      </div>
      </div>
      `
     }

    document.getElementById('songs').innerHTML = template
console.log(results)
  }




  
}
