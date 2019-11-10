import * as THREE from './build/three.module.js';

import {Group} from './Group.js';

import * as Model from './Model.js';

class Creeper extends Group
{
	constructor()
	{
		super();

		this.speed = 8;

		Model.load("minecraft_-_creeper/scene.gltf", 2, (creeper) => {
			creeper.position.x = 4;
			creeper.rotateZ(Math.PI);

			super.add(creeper);
		}, (error) => { alert(error); });

	}

	update(amount)
	{
		var angle = amount*this.speed*Math.PI;
		var euler = new THREE.Euler(0, angle, 0, 'XYZ');
		this.setRotationFromEuler(euler);
	}
}

export {Creeper};