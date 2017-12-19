var parentContainer = $(".parent-container");

$( document ).ready(function() {

     //bring up add dancer modal when click on Add Dancer button
  $("#addDancerBtn").click(function(){
    $("#addDancerModal").modal();
});

// Adding an event listener for when the add dancer form is submitted
$(addDancerForm).on("submit", function handleFormSubmit(event) {

event.preventDefault();

// Getting jQuery references to the dancer fields
var nameInput = $("#dncrname").val().trim();
var yearSelected = $("input[name='yr-in-school']:checked").val();
var imageInput = $("#imgname").val().trim();

var addDancerForm = $("#addDancerForm");

// Won't submit the add dancer if we are missing a name
if (!nameInput) {
  return;
} 

// Constructing a newDancer object to hand to the database
var newDancer = {
  dancer_name: nameInput,
  year_in_school: yearSelected, 
  image_path: imageInput
};

console.log(newDancer);

submitNewDancer(newDancer);

});

// Adds a new dancer
function submitNewDancer(newdancer) {
$.post("/api/addDancer/", newdancer, function() {
  //put success message on form 
  var $select = $('#successMessage');
  $select.append('<h3>You have successfully added a new dancer!</h3><p>Click Close to continue.</p></h3>');
});
}


          
$('#addDancerModal').on('hidden.bs.modal', function () {
    
      window.location.href = "/dmanage";
        
    })


    function getDancers() {
        console.log("inside get dancers");
        $.get("/api/dancers", function(data) {
            
          console.log("Dancers", data);
        dancers=data;

        console.log(dancers.length);
        if (!dancers || !dancers.length) {
            displayEmpty();
          }
          else {
            
            initializeRows(dancers);
          }  
        });
      }
    getDancers();

    function initializeRows(dancers) {
        console.log("insdie dancers array");
        console.log(dancers);
        console.log(dancers.length);
        
       
        $table = $('<table class="table table-bordered table-inverse">');
         // caption
    $table.append('<caption><h1><b>Dancer Database</b></h1></caption>')
           .append('<thead>').children('thead')
           .append('<tr />').children('tr')
           .append('<th>Dancer Name</th><th>Year in school</th><th>Image path</th><th>Update button</th><th>Remove Button</th><th>Dancer ID</th><th>Parent Info</th>');
        
        var $tbody = $table.append('<tbody />').children('tbody');

        for (var i = 0; i < dancers.length; i++) {
            $tbody.append('<tr />').children('tr:last')
            .append("<td>"+dancers[i].dancer_name+"</td>")
            .append("<td>"+dancers[i].year_in_school+"</td>")
            .append("<td>"+dancers[i].image_path+"</td>")
            .append("<td><button type='button' class='btn btn-primary updtbtn' id='updtbtn'>Update</button></td>")
            .append("<td><button type='button' class='btn btn-primary delbtn' id='delbtn'>Delete</button></td>")
            .append("<td>"+dancers[i].id+"</td>")
            .append("<td><button type='button' class='btn btn-primary parentbtn' id='parentbtn'>Look Up</button></td>");  
        }
        $table.appendTo('#dynamicTable');
//        parentContainer.append(parentsToAdd);
      }


      // This function displays a messgae when there are no posts
  function displayEmpty() {
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No dancers yet");
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



$(".modal-body #dancer-name").val( tablerow[0] );
$(".modal-body #school-year").val( tablerow[1] );
$(".modal-body #img-path").val( tablerow[2] );
$(".modal-body #dancer-id").val( tablerow[5] );
$(".modal-body #parent-id").val( tablerow[6] );


  $('#myModal').modal('show');

    $('#myModal').modal({
      show: 'show'});


 
    //   $("#resultas").append($item);       // Outputs the answer
});

$(updForm).on("submit", function handleFormSubmit(event) {
    
       event.preventDefault();

       console.log("inside update parent");
        
       // Getting jQuery references to the form input values
        var dancerIdInput = $("#dancer-id").val().trim();
        var dancerNameInput = $("#dancer-name").val().trim();
        var dancerSchoolYear = $("#school-year").val().trim();
        var dancerImgPath = $('#img-path').val().trim();   
    
        var updateDancer = {
            id: dancerIdInput,
            dancer_name: dancerNameInput,
            year_in_school: dancerSchoolYear,
            image_path: dancerImgPath
        }
    
        console.log(updateDancer);

        $.ajax({
            method: "PUT",
            url: "/api/dancers/update",
            data: updateDancer
          })
          .done(function() {
            $("#upds").html("information has been updated");  
            console.log("ajax call update is done");
          });

});    

$('#myModal').on('hidden.bs.modal', function () {

  window.location.href = "/dmanage";
    
})

  
$('body').on("click", "#delbtn", function() {
    var tablerow = [];
    console.log("inside delete button")
    var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
    $tds = $row.find("td");             // Finds all children <td> elements

    $.each($tds, function() {               // Visits every single <td> element
    console.log($(this).text())        // Prints out the text within the <td>
    tablerow.push($(this).text())
});

$(".modal-body2 #ddancer-name").val( tablerow[0] );
$(".modal-body2 #dschool-year").val( tablerow[1] );
$(".modal-body2 #dimg-path").val( tablerow[2] );
$(".modal-body2 #ddancer-id").val( tablerow[5] );
$(".modal-body2 #dparent-id").val( tablerow[6] );






  $('#myModal2').modal('show');

    $('#myModal2').modal({
      show: 'show'});


 
    //   $("#resultas").append($item);       // Outputs the answer
});


$(delForm).on("submit", function handleFormSubmit(event) {
    
       event.preventDefault();

       console.log("inside delete parent");
       // Getting jQuery references to the form input values
       var dancerIdInput = $("#ddancer-id").val().trim();
       var parentIdInput = $("#dparent-id").val().trim();
       var dancerNameInput = $("#ddancer-name").val().trim();
       var dancerSchoolYear = $("#dschool-year").val().trim();
       var dancerImgPath = $('#dimg-path').val().trim();   
        

        pid = parentIdInput;
        console.log("inside delete:",pid);
        id = dancerIdInput;
        console.log("inside delete:",id);
       is_active_value=false;
    
        
        var updateDancer = {
            id: id,
            is_active: is_active_value
        }
    
        var updateParent = {
            DancerId : id,
            is_active: is_active_value
        }

        console.log(updateDancer);

        $.ajax({
            method: "PUT",
            url: "/api/dancers/update",
            data: updateDancer
          })
          .done(function() {
            $.ajax({
                method: "PUT",
                url: "/api/parents/update",
                data: updateParent
              })
              .done(function() {
                $("#delds").html("dancer has been deleted");  
                console.log("ajax call update is done");
              });
          });
        
    
    

          
            $('#myModal2').on('hidden.bs.modal', function () {
                
                  window.location.href = "/dmanage";
                    
                })
                


          })

 
          $('body').on("click", "#parentbtn", function() {
            var tablerow = [];
            console.log("inside delete button")
            var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
            $tds = $row.find("td");             // Finds all children <td> elements
        
            $.each($tds, function() {               // Visits every single <td> element
            console.log($(this).text())        // Prints out the text within the <td>
            tablerow.push($(this).text())
        });

        dancerId=tablerow[5];

        $.get("/api/parents/select/" + dancerId, function(data) {
         
             parents=data;

            if (parents.length==0)
            {  displayEmptyParents(parents);
            }
            else {
              initializeRowsParents(parents);
            }
          });

      
       
        
          $('#myModalp').modal('show');
        
            $('#myModalp').modal({
              show: 'show'});
        
        
         
            //   $("#resultas").append($item);       // Outputs the answer
        });
        


        function initializeRowsParents(parents) {
            console.log("insdie parents generation array");
            console.log(parents);
            $( "#dynamicTable2" ).empty();
            //$table.append(' ');
            //$tbody.append(' ');
            //$table.appendTo('#dynamicTable2');    
           
            $table = $('<table class=table table-striped>');
             // caption
          $table.append('<caption><h3>Dancer-Parent</h3></caption>')
                .append('<thead>').children('thead') 
                .append('<tr />').children('tr')
                .append('<th>Parent ID</th><th>Parent Name</th><th>Parent email</th><th>Phone no</th>');

                var $tbody = $table.append('<tbody />').children('tbody');

        for (var i = 0; i < parents.length; i++) {
                $tbody.append('<tr />').children('tr:last')
                .append("<td>"+parents[i].id+"</td>")
                .append("<td>"+parents[i].parent_name+"</td>")
                .append("<td>"+parents[i].email+"</td>")
                .append("<td>"+parents[i].phone_no+"</td>");
               
        }
       
        $table.appendTo('#dynamicTable2');
            
   
          }

        function displayEmptyParents(parents) {
            $( "#dynamicTable2" ).empty();
            
           
            $table = $('<table class=table table-striped>');
             // caption
          $table.append('<caption><h3>Dancer-Parent</h3></caption>')
                .append('<thead>').children('thead') 
                .append('<tr />').children('tr')
                .append('<th>Parent ID</th><th>Parent Name</th><th>Parent email</th><th>Phone no</th>');
        var $tbody = $table.append('<tbody />').children('tbody');

          
                $tbody.append('<tr />').children('tr:last')
                .append("<td>"+"None"+"</td>")
                .append("<td>"+"None"+"</td>")
                .append("<td>"+"None"+"</td>")
                .append("<td>"+"None"+"</td>");
               
                $table.appendTo('#dynamicTable2');
   
          }


})    