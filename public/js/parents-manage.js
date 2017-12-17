$(document).ready(function() {

  //bring up add parent modal
  $("#addParentBtn").click(function(){
        //get dancers from the database so we can fill in the drop down select dancer box
        getDancers();
        $("#addParentModal").modal();
  });

  // Adding an event listener for when the add parent form is submitted
  $(addParentForm).on("submit", function handleFormSubmit(event) {

    event.preventDefault();
    
    // Getting jQuery references to the form input values
    var nameInput = $("#prntname").val().trim();
    var emailInput = $("#emailaddr").val();
    var phoneInput = $("#phonenum").val();
    var selectedDancerName = $("#selDancer").find("option:selected").text();
    var selectedDancerId = $("#selDancer").val();

    var addDancerForm = $("#addParentForm");

    // Won't submit the add parent if we are missing a name
    if (!nameInput) {
      return;
    } 
  
    // Constructing a newParent object to hand to the database
    var newParent = {
      parent_name: nameInput,
      email: emailInput,
      phone_no: phoneInput,
      DancerId: selectedDancerId 
    };

    submitNewParent(newParent);

  }); //end of AddParentForm on submit

  // Adds a new parent
  function submitNewParent(newparent) {
    $.post("/api/addParent/", newparent, function() {
       //put success message on form 
       var $select = $('#successMessage');
       $select.append('<h3>You have successfully added a new parent!</h3><p>Click Close to continue.</p></h3>');
    }); 
  } //end of function submitNewParent

  // This function gets dancers from the database and dynamically builds the option tags in select dropdown on form
  function getDancers() {
    $.get("/api/getDancers", function(data) {
      console.log("Dancers", data);
      dancers = data;
      initializeSelectList(dancers);    
    });
  } //end of function getDancers

  function initializeSelectList(dancers) {
    //grab the select with id = "selDancer"
    var $select = $('#selDancer');
    //append option list with dancers
    for (var i=0; i< dancers.length; i++) {
      $select.append('<option value="' + dancers[i].id + '">' + dancers[i].dancer_name + '</option>');
    }
  }

}); //end of document.ready




    