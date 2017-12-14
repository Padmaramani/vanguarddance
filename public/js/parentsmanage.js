
var parentContainer = $(".parent-container");

$( document ).ready(function() {
    function getParents() {
        console.log("inside get parents");
        $.get("/api/parents", function(data) {
          console.log("Parents", data);
        parents=data;

        console.log(parents.length);
        if (!parents || !parents.length) {
            displayEmpty();
          }
          else {
            initializeRows(parents);
          }  
        });
      }
    getParents();

    function initializeRows(parents) {
        console.log("insdie parents array");
        console.log(parents);
        console.log(parents.length);
        parentContainer.empty();
        $table = $('<table class=table table-striped>');
         // caption
    $table.append('<caption><h3>Parent Database</h3></caption>')
      .append('<thead>').children('thead')
//    .append('<tr />').children('tr').('<th>Parent Name</th><th>Parent Email</th><th>Parent Phone</th><th>Parent Active</th><th>Update button</th><th>Remove Button</th>');
        var $tbody = $table.append('<tbody />').children('tbody');
//        var parentsToAdd = [];
        for (var i = 0; i < parents.length; i++) {
            $tbody.append('<tr />').children('tr:last')
            .append("<td>"+parents[i].id+"</td>")
            .append("<td>"+parents[i].parent_name+"</td>")
            .append("<td>"+parents[i].email+"</td>")
            .append("<td>"+parents[i].phone_no+"</td>")
            .append("<td>"+parents[i].is_active+"</td>")
            .append("<td><button type='button' class='btn btn-primary updtbtn' id='updtbtn'>Update</button></td>")
            .append("<td><button type='button' class='btn btn-primary updtbtn' id='delbtn'>Delete</button></td>");
        }
        $table.appendTo('#dynamicTable');
//        parentContainer.append(parentsToAdd);
      }


      // This function displays a messgae when there are no posts
  function displayEmpty() {
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No parents yet");
    blogContainer.append(messageh2);
  }

  
$('body').on("click", "#updtbtn", function() {
    var tablerow = [];
    console.log("inside update button")
    var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
    $tds = $row.find("td");             // Finds all children <td> elements

    $.each($tds, function() {               // Visits every single <td> element
    console.log($(this).text())        // Prints out the text within the <td>
    tablerow.push($(this).text())
});

generateUpdateForm(tablerow)
 
    //   $("#resultas").append($item);       // Outputs the answer
});

function generateUpdateForm(tablerow) {
    console.log(tablerow.length);
    console.log(tablerow);
    tparent_id = tablerow[0];
    tparent_name=tablerow[1];
    tparent_email=tablerow[2];
    tparent_phone=tablerow[3];
    console.log(tparent_id);
    console.log(tparent_name);
    console.log(tparent_email);
    console.log(tparent_phone);
    
    var div = document.getElementById('updtform');
    var form = document.createElement('form');
    form.setAttribute('action', 'sharer.php');
    form.setAttribute('method', 'POST');
    /*-----------*/
    var appm = document.createElement('div');
    appm.appendChild(document.createTextNode('Save This'));
    appm.setAttribute('class', 'appm');
    /*-----------*/
    
    var input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', tparent_name);
    input1.setAttribute('name', 'parentname');
    input1.setAttribute('id', 'parentname');

    var input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', tparent_email);
    input1.setAttribute('name', 'parentemail');
    input1.setAttribute('id', 'parentname');

    var input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', tparent_name);
    input1.setAttribute('name', 'parentname');
    input1.setAttribute('id', 'parentname');
    
    var input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('placeholder', 'description');
    input2.setAttribute('name', 'routedescription');
    input2.setAttribute('id', 'rdescription');
    input2.setAttribute('class', 'address');
    
    var tags = document.createElement('input');
    tags.setAttribute('type', 'text');
    tags.setAttribute('placeholder', 'tags');
    tags.setAttribute('name', 'routetags');
    tags.setAttribute('id', 'tags');
    
    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute("value", "Save");
    submit.setAttribute('id', 'savebutton');
    
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(tags);
    form.appendChild(submit);
    
    div.appendChild(form);




}

});
