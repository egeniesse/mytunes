// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
   // this.model.on("ended", ren);
    // this.model.on("ended", function(){
    //   console.log("!!!!!!");
    // }, this);
    //this.on('change', someFunk, this)
    console.log(this.model)
  },

  events : {
    'ended': this.someFunk,
  },
  someFunk: function() {
    console.log('this is getting funky')
  },
  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
