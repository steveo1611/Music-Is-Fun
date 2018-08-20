function ItunesService(){

    this.getMusicByArtist = function(artist) {

      //allows requests to localhost: 8080 otherwise blocked by itunes
      var url = 'https://itunes.apple.com/search?media=music&term=' + artist;
      
      //changes the button to loading while songs load
      $('#get-music-button').text('LOADING....');
      
   
      function swapUrlSize(url, pixels) {
        var sizeString = `${pixels}x${pixels}`;
        var newURL = url.replace("60x60", sizeString);
        return newURL;
      }
   
      //modifies the objects to reduce the excess data
      return $.getJSON(url).then(function(response){
        var songList = response.results.map(function (song) {
                  return {
                      title: song.trackName,
                      albumArt: swapUrlSize(song.artworkUrl60, 200),
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl
                    };
                })
        //changes button back to GET MUSIC once songs are loaded
        $('#get-music-button').text('GET MUSIC');
        return songList;
      })
    }
}
