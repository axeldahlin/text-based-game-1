class Location {
	constructor(title, description, things, directions) {
		this.title = title;
		this.description = description;
		this.things = things;	
		this.directions = directions;
	}

	get lookAtThings() {
		let lookText = '<p>You look around and see the following:</p><ul>';

		if (this.things.length === 0) {
			printToPLayer('<p>It seems to be nothing of interest here.</p>');
		} else {
			for (let i = 0; i < this.things.length; i++) {
			lookText += `<li>${this.things[i]}</li>`;
			}

			lookText += '</p>';

			printToPLayer(lookText);
		}
	}

			
}

class Exit {
	constructor(roomLocation, exitDirection) {
		this.roomLocation = roomLocation;
		this.exitDirection = exitDirection;
	}
}

var rooms = {
	start: new Location('Clearing',
	 					'You see a faint light far away into the forest to the <b>south</b>.\
	 					 From the <b>west</b> there is a damp sound of running water.',
	 					['feathers', 'scales'],
	 					{
	 						'west': 'clearing1.1',
	 						'south': 'lighthouse'
	 					}
	 ),


	'clearing1.1': new Location('A Stream',
								'You arrive at a stream that curves between the trees like a snake.\
								 Up <b>north</b> of the stream you see some forms in the dark. There is a starnge smell comming from there... ',
	     						[],
	     						{
	     							'east': 'start',
	     							'north': 'clearing1.2'
	     						}
	),

	'clearing1.2': new Location('Deeper Into The Clearing',
								'You stumble into a camp of... trolls!? From every side of you they seem to creep up on you. Snoring snouts and whisping\
								 hairy tailes every where you look. To your left there is a spear in the grass. To your right you see something in \
								 the grass glimmering, reflecting the star light. What do you do?',
								['spear', 'glimmering thing'],
								{
									'south': 'clearing1.1'
								}
	),

	'lighthouse': new Location('A Lighthouse',
								'You arrive to the lighthouse and walk up to the door. A man\
     							 opens the door. What do you do?',
     							 ['man'],
     							 {
     							 	'north': 'start'
     							 }
    )


}
