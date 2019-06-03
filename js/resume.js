(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
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
        "ajax": "js/skills.json",
        "dom": '<"form-row bg-gray-100"' +
               '<"form-group col-md-6 mb-0 pl-0" <"input-group" <"input-group-prepend" <"input-group-text" <"fas fa-search">>> f>>' +
               '<"form-group col-md-6 mb-0 pl-0 pl-md-1" p>>' +
               '<t>',
        "language": {
          "search": "",
          "searchPlaceholder": "Search skills"
        },
        "pageLength": 15,
        "info": false,
        "columnDefs": [
          {
            "width": "40%",
            "targets": 0
          },
          {
            "width": "60%",
            "targets": 1,
            "data": "skill_level",
            "render": function ( data, type, row, meta ) {
              return '<div class="progress">'+
                        '<div class="progress-bar bg-warning" role="progressbar" style="width:' + data + '%" aria-valuenow="' + data + '" aria-valuemin="0" aria-valuemax="100">' + data + '%</div>' +
                      '</div>';
            }
          }
        ],
        "columns": [
            { "data": "skill" },
            { "data": "level" }
        ]
  });
})(jQuery); // End of use strict
