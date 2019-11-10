import * as THREE from './build/three.module.js';

import {Group} from './Group.js';

import * as Model from './Model.js';

class Creeper extends Group
{
	constructor()
	{
		super();

		this.speed = 4;

		Model.load("creeper/scene.gltf", 2, (creeper) =>
		{
			//moving the creeper from the center to make it rotate around origin
			creeper.position.x = 4

			//orientate the creeper
			creeper.rotateZ(Math.PI);

			super.add(creeper);
		}, (error) => { alert(error); });

	}

	update(amount)
	{
		var angle = 2*Math.PI*amount*this.speed;

		this.rotation.y = angle;
	}
}

export {Creeper};