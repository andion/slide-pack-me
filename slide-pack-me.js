/* Spagetti code for SlidePackMe */
(function(){

  /* CONFIG */
  /* We should load everything from the same domine to avoid "Content-Security-Policy" errors */
  /* TODO: check wether the md is on rawgit/github and get the appropiate file */
  /* Workaround: http://stackoverflow.com/questions/7607605/does-content-security-policy-block-bookmarklets */  
  var rawgit_url    = 'https://rawgit.com'
  var slidepack_js  = '/trabe/slide-pack/gh-pages/slide-pack.js';
  var slidepack_css = '/trabe/slide-pack/gh-pages/slide-pack.css';

  /* Create the Slide Pack container 'textarea'/xmp/etc. Returns the element */
  /* TODO: scrap md file to check wich container to use */
  var slidePackContainer = function(element_name, markdown){
    element_name = typeof element_name !== 'undefined' ? element_name : 'textarea';

    var slide_pack_container = document.createElement(element_name);
    slide_pack_container.dataset.slidePack = true;
    slide_pack_container.innerHTML = markdown;

    return slide_pack_container; 
  }

  /* "MAIN" */
  /* Insert slidepack css */
  var sieses = document.createElement('link');
  sieses.setAttribute('rel', 'stylesheet');
  sieses.setAttribute('type','text/css');
  sieses.setAttribute('href', rawgit_url + slidepack_css);
  document.head.appendChild(sieses);
  /* Replace the raw_markdown to the slide-pack container with the markdown */

  var raw_markdown_element = document.body.getElementsByTagName('pre')[0];
  var slide_pack_element   = slidePackContainer('textarea', raw_markdown_element.innerHTML)  
  document.body.replaceChild(slide_pack_element, raw_markdown_element);



  var jeies1 = document.createElement('script');
  jeies1.type = 'text/javascript';
  jeies1.async = true;
  jeies1.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js';

  document.body.appendChild(jeies1);

  

  /* Now insert slidepack js */

  var jeies = document.createElement('script');
  jeies.type = 'text/javascript';
  jeies.async = true;
  jeies.src = rawgit_url + slidepack_js;

  document.body.appendChild(jeies);
}());