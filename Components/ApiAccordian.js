export default function apiAccordian() {
	//API fetch from Brewdog
	fetch("https://api.punkapi.com/v2/beers")
		.then((response) => response.json())
		.then(function (data) {
			console.log(data);
			const html = data.map((beer) => {
				return "Beer name: " + beer.name + " Tagline: " + beer.tagline;
			});
			console.log(html);
		});
}
