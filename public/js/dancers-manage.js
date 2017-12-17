$(document).ready(function() {
    
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


  
  });
      