var results = '';
// runner objects
var tortoise = {
	minSpeed: 3,
	maxSpeed: 5,
	currentDistance: 0,
};
var hare = {
	minSpeed: 0,
	maxSpeed: 8,
	currentDistance: 0,
};

// click to run simulation
document.getElementById('start').addEventListener('click', () => runRace());

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
function runRace() {
	results = '';
	// generate race distance
	var totalDistance = Math.floor(Math.random() * 100);
	results += `In a race distance of ${totalDistance} meters, `;

	var increment = 0;
	// reset scores
	tortoise.currentDistance = 0;
	hare.currentDistance = 0;

	// initialize
	tortoise.minSpeed = +document.getElementById('tortoiseMinSpeed').value;
	tortoise.maxSpeed = +document.getElementById('tortoiseMaxSpeed').value;
	hare.minSpeed = +document.getElementById('hareMinSpeed').value;
	hare.maxSpeed = +document.getElementById('hareMaxSpeed').value;

	// every interval, random distance between minSpeed and maxSpeed
	while (tortoise.currentDistance < totalDistance && hare.currentDistance < totalDistance) {
		console.log('before = ' + tortoise.currentDistance, hare.currentDistance);
		// tortoise
		increment = getRandomArbitrary(tortoise.minSpeed, tortoise.maxSpeed);
		tortoise.currentDistance += increment;
		console.log('after tortoise = ' + tortoise.currentDistance);
		// hare
		increment = getRandomArbitrary(hare.minSpeed, hare.maxSpeed);
		hare.currentDistance += increment;
		console.log('after hare = ' + hare.currentDistance);
	}

	// outcome
	if (tortoise.currentDistance < hare.currentDistance) {
		results += `Hare won.<br>Hare ran ${hare.currentDistance.toFixed(1)}m.<br>Tortoise ran ${tortoise.currentDistance.toFixed(1)}.`;
		updateWinner(true);
	} else {
		results += `Tortoise won.<br>Tortoise ran ${tortoise.currentDistance.toFixed(1)}m.<br>Hare ran ${hare.currentDistance.toFixed(1)}m.`;
		updateWinner(false);
	}
}

function updateWinner(hareWon) {
	if (hareWon === true) {
		document.getElementById('results').innerHTML += `<div class="blob red">${results}</div>`;
	} else {
		document.getElementById('results').innerHTML += `<div class="blob green">${results}</div>`;
	}
}

// Getting a random number between two values
function getRandomArbitrary(min, max) {
	var result = Math.random() * (max - min) + min;
	console.log(`random increment = ${result}`);
	return result;
}
