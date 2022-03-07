import accordionComponent from "./Components/Accordian.js";
import apiAccordian from "./Components/ApiAccordian.js";
import bottleAnimate from "./Components/BottleAnimate.js";

//bottleAnimate();
apiAccordian();

function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, 2000);
	});
}

async function asyncCall() {
	console.log("calling");
	const result = await resolveAfter2Seconds();
	accordionComponent();
	console.log(result);
	// expected output: "resolved"
}

asyncCall();
