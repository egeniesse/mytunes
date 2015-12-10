// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on("add", function(){
      if (this.length===1) {
        this.playFirst();
      }
    }, this)
    this.on("dequeue", this.removeSong, this);
    this.on("ended", this.removeSong, this);

  },

  playFirst: function() {
   // console.log("anything?????");
    this.at(0).play();
  },

  removeSong: function(song) {    
    this.shift();
    //this.trigger("remove");
    if(this.length){
      this.playFirst();
    }
  }


});