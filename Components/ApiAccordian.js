export default function apiAccordian() {
	//API fetch from Brewdog
	fetch("https://api.punkapi.com/v2/beers")
		.then((response) => response.json())
		.then(function (data) {
			console.log(data);
			//map accorion beers
			const htmlAccoridan = data.map((beer) => {
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
				.insertAdjacentHTML("afterbegin", htmlAccoridan.join(""));
			// map CTA grid beers
			const htmlCtaGrid = data.map((beer) => {
				return `
				<div class="card">
					<h3 class="CTA-grid__title">${beer.name}</h3>
					<img src="${beer.image_url}" alt="${beer.name}" />
				</div>
				`;
			});

			document
				.querySelector(".CTA-grid__wrapper")
				.insertAdjacentHTML("afterbegin", htmlCtaGrid.join(""));
		});
}
