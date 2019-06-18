(function($) {
  "use strict"; // Start of use strict

  //Define namespace if not exist
  window.resume = window.resume || {};

  //Set document title
  window.resume.title = $(document).find("title").text();

  //Set document sections
  window.resume.sections = $("section");

  //Define new timer to monitor user interaction
  window.resume.skillTableTimer = null;
  window.resume.skillTableQuery = null;
  window.resume.skillTableEventSent = false;
  window.resume.skillTableLastKeyDelete = false;

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

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Bind Datatables
  $('#skillsTable').DataTable({
        "ajax": "js/skills.min.json",
        "dom": '<"form-row bg-gray-100"' +
               '<"form-group col-md-6 mb-0 pl-0" <"input-group" <"input-group-prepend" <"input-group-text" <"fas fa-search">>> f>>' +
               '<"form-group col-md-6 mb-0 pl-0 pl-md-1" p>>' +
               '<t>',
        "language": {
          "search": "",
          "searchPlaceholder": "Search skills"
        },
        "pageLength": 14,
        "info": false,
        "columnDefs": [
          {
            "targets": 0,
            "width": "40%",
            "responsivePriority": 3,
            "className": "d-none d-md-block"
          },
          {
            "targets": 1,
            "width": "60%",
            "responsivePriority": 1,
            "className": "d-md-none"
          },
          {
            "targets": 2,
            "width": "60%",
            "responsivePriority": 2,
            "data": "skill_level",
            "render": function ( data, type, row, meta ) {
              return '<div class="progress">'+
                        '<div class="progress-bar bg-warning" role="progressbar" style="width:' + data + '%" aria-valuenow="' + data + '" aria-valuemin="0" aria-valuemax="100">' + data + '%</div>' +
                      '</div>';
            }
          }
        ],
        "columns": [
            { "data": "skillLong" },
            { "data": "skillShort" },
            { "data": "level" }
        ],
        "initComplete": function() {
          $('#skillsTable_filter').find("input").on("input", function(event){
            //If the event has not been sent
            if(!window.resume.skillTableEventSent){

              //Set new query value
              window.resume.skillTableQuery = event.target.value.toString();

              //Clear previous timeout
              if(window.resume.skillTableTimer != null){
                clearTimeout(window.resume.skillTableTimer);
              }

              //Start new timer before sending event
              window.resume.skillTableTimer = setTimeout(function(){
                if(window.resume.skillTableQuery.length > 0){
                  console.log("Sending:" + window.resume.skillTableQuery); //Send event
                  window.resume.skillTableEventSent = true; //Set event sent
                }
              }, 2000); //Wait 2 seconds
            }

          }).keydown(function(event){
            //Detect text deletion (Backspace/Delete)
            if((event.which === 46 || event.which === 8)){
              if(!window.resume.skillTableEventSent){
                //Clear previous timeout
                if(window.resume.skillTableTimer != null){
                  clearTimeout(window.resume.skillTableTimer);
                }

                if (window.resume.skillTableQuery.length > 0) {
                  console.log("Sending:" + window.resume.skillTableQuery);
                }
                
                //Ensure the event does not fire again
                window.resume.skillTableEventSent = true;
              }
              //Set last key to delete
              window.resume.skillTableLastKeyDelete = true;
            }
            else{
              window.resume.skillTableEventSent = false; //Event not sent
              window.resume.skillTableLastKeyDelete = false; //Last key not delete
            }
          });
        }
  });
})(jQuery); // End of use strict
