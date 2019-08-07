(function($) {
  "use strict"; // Start of use strict

  //Define namespace if not exist
  window.resume = window.resume || {};

  //Set document title/sections
  window.resume.title = $(document).find("title").text();
  window.resume.sections = $("section");

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      //Animate scroll
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  //Listen for scrolling and update visited section
  $(window).scroll(
    function(){
      var currentScroll = $(this).scrollTop();
      //Loop through section to find if we've scrolled through it
      $.each(window.resume.sections.get().reverse(), function(index, object){
        if(currentScroll > object.offsetTop-50){
          object = $(object);
          //Update the current section if we haven't visited it before
          if(object.attr("visited") !== "true"){
            object.attr("visited", "true");
            //Log page_view event
            gtag('event', 'page_view', {
              'page_title': window.resume.title,
              'page_path' : "/#" + object.attr("id")
            });
          }
          //Stop loop
          return false;
        }
      });
    }
  );

  //Track resume download
  $('#resumeDownload').on("click", function () {
    //Send event
    gtag('event', 'view_item', {
      'event_category': 'engagement',
      'event_label' : 'resume_download',
      'value': 1
    });
  });



  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
})(jQuery); // End of use strict
