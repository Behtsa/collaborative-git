var $button = $("#push")
var API_ENDPOINT = "https://api.themoviedb.org/3/search/movie?"
var api_key ="api_key=b1ee0f27a3fa4bc1700b668da7528499"
var query = "&query="
var $input
const request = superagent

function getJson() {
	var $button = $("#submit")
	$button.click(movieAsked)
	$input = $("#movie")
	// var url = API_ENDPOINT + api_key + query + movie
	// console.log(url)
}

function movieAsked() {
	var url = API_ENDPOINT + api_key + query + $input.val()
	// console.log(url)
	request
	.get(url)
	.then(function(response) {
		const responseObject = response.body
		// console.log(responseObject)
		const movieTitle = responseObject.results
		const movieTriler = movieTitle[1]
		const overview = movieTriler.overview
		console.log(overview)
	})
	.catch(function() {
		alert("Error")
	})

}



$(document).ready(getJson)