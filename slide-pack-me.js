/* LOAD javascript when we want */
(function(){
  var Loader = function () {};

  Loader.prototype = {
    require: function (scripts, callback) {
      this.loadCount      = 0;
      this.totalRequired  = scripts.length;
      this.callback       = callback;

      for (var i = 0; i < scripts.length; i++) {
        this.writeScript(scripts[i]);
      }
    },
    loaded: function (evt) {
      this.loadCount++;

      if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src) {
      var self = this;
      var s = document.createElement('script', 'data-cosa-de-mierda');
      s.type = "text/javascript";
      s.async = true;
      s.src = src;
      s.addEventListener('load', function (e) { self.loaded(e); }, false);
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(s);
    }
  }


  /* Create the Slide Pack container 'textarea'/xmp/etc */
  var insertSlidePackContainer = function(element_name){
    var slide_pack_container = document.createElement(element_name); /* TODO: select the most appropiate one */
    slide_pack_container.dataset.slidePack = true;
    document.body.appendChild(slide_pack_container);
    return slide_pack_container; 
  }

  /* Get the gist */
  var gist = new XMLHttpRequest();
  gist.open("GET", "https://gist.githubusercontent.com/andion/44f626e88cc1f39b7495/raw/657c7abe226706cc13dd2ef280dd0e3fc445c8b5/sample_slides.md", true);
  gist.onreadystatechange = function () {
    if (gist.readyState != 4 || gist.status != 200) return;
    
    var slides = insertSlidePackContainer('textarea');

    /* Get the response and set is as the textarea's innerHtml */
    slides.innerHTML = gist.responseText;

    /* LOAD slide-pack now. Content had to be loaded before it is processed - Alternative: A hook in slide-pack */
    new Loader().require(['slide-pack.js']);
  };

  /* Actually do the request. */
  gist.send();
}());