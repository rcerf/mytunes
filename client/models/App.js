// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueued', function(song){
      console.log("heard enqeue");
      var temp = this.get('songQueue');
      this.set('songQueue', temp.addSong(song));
    }, this);
  }

});
