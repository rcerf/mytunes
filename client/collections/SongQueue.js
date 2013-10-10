// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(){
    //console.log("init", this);
    this.on("add", function(){
      if (this.models.length === 1) {
        this.playFirst();
      }
    });
    this.on("ended", function(){
      this.removeSong();
    });
  },

  playFirst: function(){ this.models[0].play(); },

  removeSong: function(){
    this.shift();
  }

});
