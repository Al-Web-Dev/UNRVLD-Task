export default function apiAccordian() {
	//API fetch from Brewdog
	fetch("https://api.punkapi.com/v2/beers")
		.then((response) => response.json())
		.then(function (data) {
			console.log(data);
			const html = data.map((beer) => {
				return `
				<button class="accordian">
				<h3>${beer.name}</h3>
				<img src="bottle-icon.jpg" class="bottle" />
			</button>
			<div class="panel">
				<p>
					Tagline: ${beer.tagline}<br>
					abv: ${beer.abv}

				</p>
			</div>
				`;
			});

			document
				.querySelector("#accordionBeerInfo")
				.insertAdjacentHTML("afterbegin", html.join(""));
		});
}
