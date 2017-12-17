$(document).ready(function() {
    //get parents from database
    //build panel divs

    getParents();

    function getParents() {
        $.get("/api/getParents", function(data) {
          parents = data;
          buildTable(parents);    
        });
    } //end of function getDancers
    
    function buildTable(parents) {
        //grab the element with id = "selDancer"
        var $select = $('#parentTable');

        //dynamically build the panels to display all the dancers
        for (var i=0; i< parents.length; i++) {
            //TODO: get dancer name of DancerId
            $select.append('<tr><td>' + parents[i].parent_name +
            '</td><td>' + parents[i].email + 
            '</td><td>' + parents[i].phone_no + 
            '</td><td>' + parents[i].DancerId + 
            '</td></tr>');
        } //end for var i=0

    } //end of buildPanels function
  
  });
      
