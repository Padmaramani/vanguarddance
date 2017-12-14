$(document).ready(function() {
    console.log("Inside document ready function");

    //bring up add dancer modal
    $("#myBtn").click(function(){
          $("#myModal").modal();
    });
 
    // Gets an optional query string from our url (i.e. ?post_id=23)
    var url = window.location.search;
    var postId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?post_id=1, postId is 1
    if (url.indexOf("?post_id=") !== -1) {
      postId = url.split("=")[1];
      getPostData(postId);
    }
   
    // Adding an event listener for when the add dancer form is submitted
    $(addDancerForm).on("submit", function handleFormSubmit(event) {
      console.log("inside on submit");

      event.preventDefault();
      
      // Getting jQuery references to the post body, title, form, and category select
      var nameInput = $("#dncrname").val().trim();
      var yearSelected = $("input[name='yr-in-school']:checked").val();
      var imageInput = $("#imgname").val().trim();
      var addDancerForm = $("#addDancerForm");

      console.log("nameInput: "+ nameInput);
      console.log("yearSelected: "+ yearSelected);

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
      // // If we're updating a post run updatePost to update a post
      // // Otherwise run submitPost to create a whole new post
      // if (updating) {
      //   newPost.id = postId;
      //   updatePost(newPost);
      // }
      // else {
      //   submitPost(newDancer);
      // }
    });
  
    // Submits a new post and brings user to blog page upon completion
    function submitNewDancer(newdancer) {
      $.post("/api/addDancer/", newdancer, function() {
        // window.location.href = "/blog";
      });
    }
  
    // // Gets post data for a post if we're editing
    // function getPostData(id) {
    //   $.get("/api/posts/" + id, function(data) {
    //     if (data) {
    //       // If this post exists, prefill our cms forms with its data
    //       titleInput.val(data.title);
    //       bodyInput.val(data.body);
    //       postCategorySelect.val(data.category);
    //       // If we have a post with this id, set a flag for us to know to update the post
    //       // when we hit submit
    //       updating = true;
    //     }
    //   });
    // }
  
    // Update a given post, bring user to the blog page when done
    // function updatePost(post) {
    //   $.ajax({
    //     method: "PUT",
    //     url: "/api/posts",
    //     data: post
    //   })
    //   .done(function() {
    //     window.location.href = "/blog";
    //   });
    // }
  });
      