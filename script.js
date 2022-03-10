var results = '';
// runner objects
var tortoise = {
	minSpeed: 3,
	maxSpeed: 5,
	currentDistance: 0,
	totalWins: 0,
};
var hare = {
	minSpeed: 0,
	maxSpeed: 8,
	currentDistance: 0,
	totalWins: 0,
};

// click to run simulation
document.getElementById('start').addEventListener('click', () => runRace());

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
function runRace() {
	results = '';
	// generate race distance
	var totalDistance = +getRandomArbitrary(document.getElementById('raceMinDistance').value, document.getElementById('raceMaxDistance').value);
	results += `In a race distance of ${totalDistance.toFixed(1)} meters, `;

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
		// console.log('before = ' + tortoise.currentDistance, hare.currentDistance);
		// tortoise
		increment = getRandomArbitrary(tortoise.minSpeed, tortoise.maxSpeed);
		tortoise.currentDistance += increment;
		// console.log('after tortoise = ' + tortoise.currentDistance);
		// hare
		increment = getRandomArbitrary(hare.minSpeed, hare.maxSpeed);
		hare.currentDistance += increment;
		// console.log('after hare = ' + hare.currentDistance);
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
		document.getElementById('results').innerHTML += `<div class="blob red" style="display:table;"><img src="./Icons8-Ios7-Animals-Running-Rabbit.ico" alt="hare" style="float: left; margin-right: 1rem;" />${results}</div>`;
		hare.totalWins++;
		document.getElementById('hareWins').innerHTML = hare.totalWins;
	} else {
		document.getElementById('results').innerHTML += `<div class="blob green" style="display:table;"><img src="./Icons8-Ios7-Animals-Turtle.ico" alt="tortoise" style="float: left; margin-right: 1rem;"/>${results}</div>`;
		tortoise.totalWins++;
		document.getElementById('tortoiseWins').innerHTML = hare.totalWins;
	}

	var myDiv = document.querySelector('.race');

	myDiv.scrollTop = myDiv.scrollHeight;
}

// Getting a random number between two values
function getRandomArbitrary(min, max) {
	var result = Math.random() * (max - min) + min;
	// console.log(`random increment = ${result}`);
	return result;
}

document.getElementById('start10').addEventListener('click', () => {
	for (var i = 0; i < 10; i++) {
		setTimeout(runRace(), 1);
	}
});

document.getElementById('start100').addEventListener('click', () => {
	for (var i = 0; i < 100; i++) {
		setTimeout(runRace(), 1);
	}
});
