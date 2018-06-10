class Location {
	constructor(title, description, things, directions) {
		this.title = title;
		this.description = description;
		this.things = things;	
		this.directions = directions;
	}
}

class Exit {
	constructor(roomLocation, exitDirection) {
		this.roomLocation = roomLocation;
		this.exitDirection = exitDirection;
	}
}

var rooms = {
	start: new Location('Dark Place',
	 					'You are in a dark, cold place and you see a light to <b>south</b>\
	 					 and you hear the sound of running water to the <b>west</b>',
	 					['stone', 'spade'],
	 					{
	 						'west': 'clearing1.1',
	 						'south': 'lighthouse'
	 					}
	 ),


	'clearing1.1': new Location('A Clearing',
								'You arrive to a clearing with a stream running through.\
								 Up <b>north</b> of the stream you see some forms in the dark. There is a starnge smell comming from there... ',
	     						[],
	     						{
	     							'east': 'start',
	     							'north': 'clearing1.2'
	     						}
	),

	'clearing1.2': new Location('Deeper Into The Clearing',
								'You stumble into a camp of... Trolls!? From every side of you they seem to creep up on you. Snoring snouts and whisping\
								 hairy tailes every where you look. To your left one of there spear lay in the gras. To your right you see something in \
								 the grass glimmering, reflecting the moon light. What do you do?',
								['spear', 'glimmering thing'],
								{
									'south': 'clearing1.1'
								}
	),

	'lighthouse': new Location('A Lighthouse',
								'You arrive to the lighthouse and walk up to the door. A strange old lady\
     							 opens the door. What do you do?',
     							 [],
     							 {
     							 	'north': 'start'
     							 }
    )


}
