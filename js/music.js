$(document).ready(function() {
  window.wallpaperPropertyListener = {
    applyUserProperties: function(pro) {
      var mv = document.getElementById("musicdv");
      if(pro.volume) {
        mv.volume = pro.volume.value/100;
      }
    }
  }
});