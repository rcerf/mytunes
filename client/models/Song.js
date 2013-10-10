// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log("playing", this);
  },

  ended: function(){
    this.trigger('ended');
    console.log("ended", this);
  },

  dequeue: function(){
    this.trigger('dequeued', this);
  },

  enqueue: function(){
    console.log('song queued', this);
    this.trigger('enqueued', this);
  }

});
