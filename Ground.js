import * as THREE from './build/three.module.js';

import {Group} from './Group.js'
import { GroundCube } from './Cube.js';

export function createGround(width,height) {
	var pivotGround = new Group()
	for (var x = 0; x < width; x++) {
		for (var z = 0; z < height; z++) {
			var cube = new GroundCube();
			cube.castShadow = true;
			cube.receiveShadow = true;
			cube.position.x = x;
			cube.position.z = z;
			pivotGround.add(cube);
		}
	}
	return pivotGround	
}