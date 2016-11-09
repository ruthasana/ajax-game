
// Initial array of animals 
	var birds = ['Killdeer', 'Zone-tailed Hawk', 'Ovenbird', 'Gadwall', 'gulls', 'owls','hummingbirds'];

	// ========================================================

	// displayBirdsInfo function now renders the HTML to display the appropriate content. 
	function displayBirdsInfo(){

		var bird = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + bird + "&api_key=dc6zaTOxFJmzC";
		console.log(bird);
		// Creates AJAX call for the specific bird 
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		console.log(response.data[0])
			// Creates a generic div to hold the birds
			var birdDiv = $('<div class="bird">');

			// looping through the response and display the data 
			for (var i = 0; i < 10; i++){

				$("#birdView").prepend(
					"<img src=" + response.data[i].images.fixed_height.url + ">" + "<br>" + "<p>" + response.data[i].rating + "</p>")
					

		  //   	var p = $('<p>');
		  //   	var image = $('<img>');
		  //   	p.append(response.data[i].rating);
		  //   	image.attr('src',response.data[i].images.fixed_height.url);
				// $('#animalView').prepend(animalDiv);

			} //closing my loop
		});

	} // Closing displayBirdsInfo

	// ========================================================

	// Generic function for displaying bird data  
	function renderButtons(){ 

		// Deletes the birds prior to adding new birds 
		$('#buttonsView').empty();

		// Loops through the array birds  
		for (var i = 0; i < birds.length; i++){

			// Then dynamicaly generates buttons for each birds in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') 
		    a.addClass('birds'); // Added a class 
		    a.attr('data-name', birds[i]); // Added a data-attribute
		    a.text(birds[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addBird').on('click', function(){
		
		// This line of code will grab the input from the textbox
		var bird = $('#bird-input').val().trim();

		// The movie from the textbox is then added to our array
		birds.push(bird);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the movieInfo
	$(document).on('click', '.birds', displayBirdsInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();