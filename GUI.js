import * as THREE from './build/three.module.js';

class GUI
{
	constructor(sun, ocean, creeper)
	{
		var gui = new dat.GUI();

		var options = gui.addFolder('Animations speed');
		options.add(sun.speed, 'Sun', 0, 0.0010).listen();
		options.add(ocean.speed, 'Ocean', 0, 0.0010).listen();
		options.add(creeper.speed, 'Creeper', 0, 100).listen();
		options.open();
	}
}

export {GUI};