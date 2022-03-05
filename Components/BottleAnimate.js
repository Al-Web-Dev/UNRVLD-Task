export default function bottleAnimate() {
	// return console.log("get that bottle spinning!!");

	var accBottle = document.getElementsByClassName("accordian");
	var bottle = document.getElementsByClassName("accordian");

	accBottle.addEventListener("click", (event) => {
		console.log("clickedd!!!");
		bottle.classList.toggle("bottle__rotate");
	});
}
