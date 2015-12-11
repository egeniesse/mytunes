// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function() {
    this.on('route' , function(){
      this.playFirst();
      console.log('WORKED')
    })
    this.on("add", function(){
      if (this.length===1) {
        this.playFirst();
      }
    }, this)
    this.on("dequeue", this.removeSong, this);
    this.on("ended", this.removeSong, this);

  },

  playFirst: function() {
    this.at(0).play();
  },

  removeSong: function(song) {    
    this.shift();
    if(this.length){
      this.playFirst();
    }
  }


});