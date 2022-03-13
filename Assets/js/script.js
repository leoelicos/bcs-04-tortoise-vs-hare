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

var renderTortoiseWins = document.getElementById('tortoiseWins');
var renderHareWins = document.getElementById('hareWins');

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
		// tortoise
		increment = getRandomArbitrary(tortoise.minSpeed, tortoise.maxSpeed);
		tortoise.currentDistance += increment;
		// hare
		increment = getRandomArbitrary(hare.minSpeed, hare.maxSpeed);
		hare.currentDistance += increment;
	}

	// outcome
	if (tortoise.currentDistance < hare.currentDistance) {
		// hare wins
		hare.totalWins++;
		// card panel tally
		renderHareWins.textContent = hare.totalWins.toString();
		// results panel
		results += `Hare won.<br>Hare ran ${hare.currentDistance.toFixed(1)}m.<br>Tortoise ran ${tortoise.currentDistance.toFixed(1)}.`;
		document.getElementById('results').innerHTML += `<div class="blob red" style="display:table;"><img src="./Assets/images/Icons8-Ios7-Animals-Running-Rabbit.ico" alt="hare" style="float: left; margin-right: 1rem;" />${results}</div>`;
	} else if (tortoise.currentDistance > hare.currentDistance) {
		// tortoise wins
		tortoise.totalWins++;
		renderTortoiseWins.textContent = tortoise.totalWins.toString();
		results += `Tortoise won.<br>Tortoise ran ${tortoise.currentDistance.toFixed(1)}m.<br>Hare ran ${hare.currentDistance.toFixed(1)}m.`;
		document.getElementById('results').innerHTML += `<div class="blob green" style="display:table;"><img src="./Assets/images//Icons8-Ios7-Animals-Turtle.ico" alt="tortoise" style="float: left; margin-right: 1rem;"/>${results}</div>`;
	} else {
		debugger;
	}
	updateWinner();
}

function updateWinner() {
	// scroll the results to the bottom
	var myDiv = document.querySelector('.race');
	myDiv.scrollTop = myDiv.scrollHeight;
}

// Getting a random number between two values
function getRandomArbitrary(min, max) {
	var result = Math.random() * (max - min) + min;
	return result;
}

document.getElementById('start10').addEventListener('click', () => {
	var tally = document.getElementById('r10');
	var i = 0;
	var race = setInterval(() => {
		i++;
		if (i > 10) {
			clearInterval(race);
		} else {
			tally.textContent = i;
			runRace();
		}
	}, 10);
});

document.getElementById('start100').addEventListener('click', () => {
	var tally = document.getElementById('r100');
	var i = 0;
	var race = setInterval(() => {
		i++;
		if (i > 100) {
			clearInterval(race);
		} else {
			tally.textContent = i;
			runRace();
		}
	}, 10);
});
