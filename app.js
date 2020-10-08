console.log("Let's get this party started!");

let total = 0;
//using total here to track gifs individually and assign a new src every submission.

$('#searchform').on('submit', async function(e) {
	e.preventDefault();
	total++;
	let searchVal = $('#searchbar').val();
	$('#searchbar').val('');
	const idx = Math.floor(Math.random() * 50);
	const response = await axios.get(
		`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
	const gif =
		response.data.data[idx].images.original
			.url;
	$('#gif-area').prepend(
		$('<img>').attr('class', `newGif${total}`)
	);
	$(`.newGif${total}`).attr('src', `${gif}`);
	$('img').attr('class', 'mt-3');
});
// This section grabs a new gif url, creates an img and appends the image to a gif area.
// Also assigns submit function to the submit button. Creates a get request to retrieve gif.
// Assigns gif to a variable after randomly selecitng one from the 50 provided per request
//

$('#deletebutton').on('click', function() {
	$('img').remove();
});
//removes all gifs when the delete button is clicked.
