import * as THREE from './build/three.module.js';

import * as dat from './jsm/libs/dat.gui.module.js';

class GUI
{
	constructor(sun, ocean, creeper)
	{
		var gui = new dat.GUI();

		var options = gui.addFolder('Animations speed');
		options.add(sun.speed, 'Sun', 0, 10).listen();
		options.add(ocean.speed, 'Ocean', 0, 10).listen();
		options.add(creeper.speed, 'Creeper', 0, 10).listen();
		options.open();
	}
}

export {GUI};