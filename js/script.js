

////////*****************************
 //        NAVBAR FISSA
 //********************************** */

$('.navbar').sticky();

$('.navbar').on('sticky-start', function(){
   $('.h1-box h1, h2').hide('slow');
})

$('.navbar').on('sticky-end', function(){
  $('.h1-box h1').show('slow');
})



////////*****************************
 //        FOTO BACKGROUND 
 //********************************** */



 $('.card img').click(function(){
  event.preventDefault();
  overlay.show('slow');
  var href= $(this).attr('src');
  
  img.show('slow').attr('src', href);
  //descrizione
  var testo= $(this).children().attr('alt');
  descrizione.text(testo).show();
 })

 
 var overlay= $("<div id='overlay'></div>");
 $('body').append(overlay);
 
 var img= $('<img />')
 $(overlay).append(img);

 overlay.click(function(){
  overlay.hide();
})

////////*****************************
 //         ANIMSITION
 //********************************** */
 $(document).ready(function() {
  $(".animazione").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});




////////*****************************
 //         CAROUSEL BOOTSTRAP
 //********************************** */
 $('.carousel').carousel({
  interval: 1500,
  ride: true,
  wrap: true,
 });
