const mainInput = document.querySelector('.main-Input');
const textDiv = document.querySelector('.text-div');






let player = {
	inventory: '',
	currentLocation: 'start'
}


const commands = ['go', 'pickup', 'look', 'talk'];

function changeRoom(dir) {
	if(rooms[player.currentLocation].directions[dir] !== undefined) {
		player.currentLocation = rooms[player.currentLocation].directions[dir];
		printToPLayer(`<p><b>${rooms[player.currentLocation].title}</b></p><p>${rooms[player.currentLocation].description}</p>`);
	} else {
		printToPLayer('<p>Looks like I can not walk that way<p>');
	}
	updateScroll();
}



function updateScroll(){
    window.scrollTo(0,document.body.scrollHeight);
}

function playerInput(input) {
	const command = input.split(' ')[0];
	printToPLayer(`<p>>> ${input}</p>`);
	switch(command) {
		case "go":
			const dir = input.split(' ')[1];
			changeRoom(dir);
			break;
		case "help":
			showHelp();
			break;
		case "instructions":
			showInstructions();
			break;
		case "look":
			rooms[currentLocation].lookAtThings;
			break;
		case "take":
			const thing = input.split(' ')[1];
			takeThing(thing);
			break;
		default:
			invalidCommand(input);
	}
	mainInput.value = '';
}


function printToPLayer(newPlayerText){
	textDiv.innerHTML += newPlayerText;
}


function showHelp() {
	printToPLayer(`	<hr>
					<p>Here are your possibel commands:</p>
					<ul>
						<li>go</li>
						<li>pick up</li>
						<li>look</li>
						<li>talk</li>
				  </ul>
				  <hr>`);
}

function showInstructions() {
	printToPLayer(`
				  <hr>
				  <p>This is the commands you can use:</p>
				  <p><b>"go"</b> use this in combination with a space and a direction (<b>"north", "east", "south"</b>, or <b>"west"</b>).</p>
				  <p><b>"grab"</b> use this in comination with a space something you see in the location.</p>
				  <p><b>"inventory"</b> lists everything that you carry.</p>
				  <p><b>"talk to"</b> use this in comination with a space and character you want to talk to.</p>
				  <hr>`);
}

function invalidCommand() {
	printToPLayer(`I don't recognize that word.`);
}

function takeThing(input) {
	console.log()
}

document.addEventListener('DOMContentLoaded', function(){
	printToPLayer(`<p><b>${rooms[player.currentLocation].title}</b></p><p>${rooms.start.description}</p>`);
	document.addEventListener('keypress', function(key) {
   		if (key.keyCode === 13) {
   			const value = mainInput.value.toLowerCase();
   			playerInput(value);
   		}
   	});
});







