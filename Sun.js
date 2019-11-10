import * as THREE from './build/three.module.js';

import {Group} from './Group.js'

import {SolarCube} from './Cube.js';

var SUN_DISTANCE = 50;

class Sun extends Group
{
	constructor()
	{
		super();

		this.speed = 1;

		this.sun = new SolarCube();
		this.sun.scale.set(7,7,7);

		this.sun.position.y = SUN_DISTANCE;

		this.add(this.sun);

		this.rotation.y = 45*Math.PI/180;
	}

	update(amount)
	{
		var rotation = 2*Math.PI*amount*this.speed;
		/*
		var axis = new THREE.Vector3();//(1, 1, 1);		
		axis.crossVectors(new THREE.Vector3(0,1,0), new THREE.Vector3(1, 1, 1)); 
		axis.normalize();
		axis = new THREE.Vector3(1, 0, 0);

		this.sun.matrix.makeRotationAxis(axis, rotation);
		this.sun.matrix.autoUpdate = false;
		*/
		this.rotation.z = rotation;
	}
}

export {Sun};