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
      console.log('ended was triggered');
      var playCount = this.at(0).get('playCount');
      this.at(0).set({playCount: playCount + 1});
      console.log(this.at(0).get('playCount'));
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
    // this.on("enqueued", function(song){
    //   console.log('enqueue event heard');
    //   this.addSong(song);
    // });
  },

  playFirst: function(){ this.first().play(); },

  removeSong: function(){
    this.shift();
  },

  addSong: function(song) {
    console.log('added song');
    console.log(this);
    this.add(song);
  },

  playNext: function(){
    if (this.length) {
      this.first().play();
    }
  }

});
