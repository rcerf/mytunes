// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(){
    //console.log("init", this);
    this.on("add", function(){
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on("ended", function(){
      this.removeSong();
      if (this.length === 1) {
        this.playFirst();
      } else {
        this.playNext();
      }
    });
    this.on("dequeued", function(){
      /* same functionality as this.ended
      might want to extend functionality
      to dequeue midqueue songs*/
      this.removeSong();
      if (this.length === 1) {
        this.playFirst();
      } else {
        this.playNext();
      }
    });
  },

  playFirst: function(){ this.first().play(); },

  removeSong: function(){
    this.shift();
  },

  playNext: function(){
    if (this.length) {
      this.first().play();
    }
  }

});
