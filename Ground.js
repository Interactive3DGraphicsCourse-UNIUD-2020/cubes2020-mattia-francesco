import * as THREE from './build/three.module.js';

import {Group} from './Group.js'
import { GroundCube } from './Cube.js';

export function createGround(width,depth) {
	var pivotGround = new Group()
		for (var z = 0; z < depth; z++) {
	for (var x = 0; x < width; x++) {
			var cube = new GroundCube();
			cube.position.x = x;
			cube.position.z = z;
			pivotGround.add(cube);
		}
	}
	return pivotGround	
}