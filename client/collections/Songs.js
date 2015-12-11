// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({



  model: SongModel,

  enqueueAndPlay : function(artist, title){
  	// iterates and locates song in the collection and enqueues that song in the beginning of the
  	// queue and plays it
  }
});

var library = new Songs(songData);