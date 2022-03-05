export default function apiAccordian() {
	//API fetch from Brewdog
	fetch("https://api.punkapi.com/v2/beers")
		.then((response) => response.json())
		.then(function (data) {
			console.log(data);
		});
}
