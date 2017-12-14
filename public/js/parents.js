var blogContainer = $(".parent-container");

// This function grabs posts from the database and updates the view
function getParents() {
  
    $.get("/api/parents" + function(data) {
      console.log("Parents", data);
      parents = data;
      if (!parents || !parents.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  function initializeRows() {
    parentContainer.empty();
    var parentsToAdd = [];
    for (var i = 0; i < parents.length; i++) {
      parentsToAdd.push(createNewRow(posts[i]));
    }
    parentContainer.append(parentsToAdd);
  }
  
