(function($) {
  "use strict"; // Start of use strict

  //Define namespace if not exist
  window.resume = window.resume || {};
  window.resume.datatables = window.resume.datatables || {};

  //Define new timer to monitor user interaction
  window.resume.datatables.skillsTable = null;
  window.resume.datatables.skillTimer = null;
  window.resume.datatables.skillQuery = null;
  window.resume.datatables.skillEventSent = false;
  window.resume.datatables.skillLastKeyDelete = false;

  //Skill search monitoring funtion
  window.resume.datatables.init = function(){
    //Search field event listener
    $('#skillsTable_filter').find("input").on("input", function(event){
      //If the event has not been sent
      if(!window.resume.datatables.skillEventSent){

        //Set new query value
        window.resume.datatables.skillQuery = event.target.value.toString();

        //Clear previous timeout
        if(window.resume.datatables.skillTimer != null){
          clearTimeout(window.resume.datatables.skillTimer);
        }

        //Start new timer before sending event
        window.resume.datatables.skillTimer = setTimeout(function(){
          if(window.resume.datatables.skillQuery.length > 0){
            //Send event
            gtag('event', 'search', {
              'event_category': 'engagement',
              'event_label' : 'skills_search_term',
              'value': window.resume.datatables.skillQuery
            });
            window.resume.datatables.skillEventSent = true; //Set event sent
          }
        }, 2000); //Wait 2 seconds
      }

    }).keydown(function(event){
      //Detect text deletion (Backspace/Delete)
      if((event.which === 46 || event.which === 8)){
        if(!window.resume.datatables.skillEventSent){
          //Clear previous timeout
          if(window.resume.datatables.skillTimer != null){
            clearTimeout(window.resume.datatables.skillTimer);
          }

          if (window.resume.datatables.skillQuery.length > 0) {
            //Send event
            gtag('event', 'search', {
              'event_category': 'engagement',
              'event_label' : 'skills_search_term',
              'value': window.resume.datatables.skillQuery
            });
          }

          //Ensure the event does not fire again
          window.resume.datatables.skillEventSent = true;
        }
        //Set last key to delete
        window.resume.datatables.skillLastKeyDelete = true;
      }
      else{
        window.resume.datatables.skillEventSent = false; //Event not sent
        window.resume.datatables.skillLastKeyDelete = false; //Last key not delete
      }
    });


    //Previous/Next button event listeners
    $('#skillsTable').on("page.dt", function () {
      var tableInfo = window.resume.datatables.skillsTable.page.info();
      //Send event
      gtag('event', 'search', {
        'event_category': 'engagement',
        'event_label' : 'skills_page_navigation',
        'value': tableInfo.page + 1
      });
    });
  }

  //Bind Datatables
  window.resume.datatables.skillsTable = $('#skillsTable').DataTable({
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
        "initComplete": window.resume.datatables.init
  });

})(jQuery); // End of use strict
