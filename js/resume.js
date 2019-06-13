(function($) {
  "use strict"; // Start of use strict

  //Define namespace if not exist
  window.resume = window.resume || {};

  //Set document title
  window.resume.title = $(document).find("title").text();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      //Log page_view event
      gtag('event', 'page_view', {
        'page_title': window.resume.title,
        'page_path' : "/" + this.hash
      });

      //Animate scroll
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
      }
    }
  });

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
        ]
  });
})(jQuery); // End of use strict
