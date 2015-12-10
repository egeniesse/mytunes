// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",
  events: {
    // 'click': function() {
    //   this.model.dequeue();
    //   this.model.ended();
    // }

  },

  initialize: function() {
    //this.collection.listenTo(this, 'change:length', this.render);
    //this.collection.on("")
    this.collection.on("add", this.render, this);
    this.collection.on("remove", this.render, this);
  },

  render: function() {
    console.log("YAY!!!!");
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
