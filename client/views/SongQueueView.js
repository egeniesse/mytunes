// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",

  initialize: function() {
    this.collection.on("play", this.navigate, this)
    this.collection.on("add", this.render, this);
    this.collection.on("remove", this.render, this);
  },

  navigate : function(song) {
    var artist = song.get('artist');
    var title = song.get('title');
    appRouter.navigate('playing/' + artist + '/' + title + '/', true);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
