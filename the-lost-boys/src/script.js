/* I learnt the parallax effect here http://www.rleonardi.com/tutorial/design-portfolio */
var IE = !!document.all;
if (!IE) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMouseXY;

var tempX = 0;
var tempY = 0;

var sceneElements = [];

fillScene();
positionElements();

window.addEventListener(
	"resize",
	function (event) {
		fillScene();
		positionElements();
	},
	true
);

function fillScene() {
	sceneElements = [];
	// reference, x, y, factor, width, height
	const moon = [
		document.getElementById("moon"),
		window.innerWidth / 2 - 205,
		20,
		0.01,
		410,
		410
	];
	const level3 = [
		document.getElementById("level3"),
		50,
		window.innerHeight / 2 - 30,
		0.035,
		window.innerWidth + 100,
		window.innerWidth + 100
	];
	const level2 = [
		document.getElementById("level2"),
		-20,
		window.innerHeight / 2 - 20,
		0.03,
		window.innerWidth + 200,
		window.innerWidth + 200
	];
	const level1 = [
		document.getElementById("level1"),
		-20,
		window.innerHeight / 2 - 5,
		0.025,
		window.innerWidth + 100,
		window.innerWidth + 100
	];
	const bridge = [
		document.getElementById("bridge"),
		0,
		window.innerHeight / 5,
		0,
		window.innerWidth + 20,
		500
	];
	const holdingBoys = [
		document.getElementById("holding-boys"),
		window.innerWidth / 2 - window.innerWidth / 12.5,
		window.innerHeight / 5 + window.innerWidth / 12.5,
		0,
		window.innerWidth / 5,
		400
	];
	const fallingBoy = [
		document.getElementById("falling-boy"),
		window.innerWidth / 2 - window.innerWidth / 22,
		window.innerHeight / 5 + window.innerWidth / 10,
		0.4,
		window.innerWidth / 14.5,
		window.innerWidth / 14.5,
		true
	];
	const lostBoysLogo = [
		document.getElementById("tlb-logo"),
		window.innerWidth / 2 - 100,
		20,
		0,
		200,
		200
	];

	sceneElements.push(
		moon,
		level3,
		level2,
		level1,
		bridge,
		holdingBoys,
		fallingBoy,
		lostBoysLogo
	);
}

function getMouseXY(e) {
	tempX = IE ? event.clientX + document.body.scrollLeft : e.pageX;
	tempY = IE ? event.clientY + document.body.scrollTop : e.pageY;

	if (tempX < 0) tempX = 0;
	if (tempY < 0) tempY = 0;

	moveDiv(tempX, tempY);

	return true;
}

function moveDiv(tempX, tempY) {
	sceneElements.forEach((obj) => {
		if (obj?.[6]) {
			const yourDivPositionY =
				obj[3] * (0.5 * window.innerHeight - tempY) + obj[2];
			const minYPosition = window.innerHeight / 5 + window.innerWidth / 11;
			obj[0].style.top = Math.max(yourDivPositionY, minYPosition) + "px";
			return;
		}
		const yourDivPositionX = obj[3] * (0.5 * window.innerWidth - tempX) + obj[1];
		obj[0].style.left = yourDivPositionX + "px";
	});
}

function positionElements() {
	sceneElements.forEach((obj) => {
		obj[0].style.left = obj[1] + "px";
		obj[0].style.top = obj[2] + "px";
		obj[0].style.width = obj[4] + "px";
		obj[0].style.height = obj[5] + "px";
	});
}
