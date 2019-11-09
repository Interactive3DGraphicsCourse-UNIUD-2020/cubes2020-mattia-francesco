import {Group} from './Group.js'
import { GroundCube,HomeWallCube,HomeRoofCube,LeavesCube } from './Cube.js';

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

export function createWallCubes(width,depth) {
	var pivotGround = new Group()
	for (var x = 0; x < width; x++) {
		for (var z = 0; z < depth; z++) {
			var cube = new HomeWallCube();
			cube.position.x = x;
			cube.position.z = z;
			pivotGround.add(cube);
		}
	}
	return pivotGround	
}

export function createRoofCubes(width,depth) {
	var pivotGround = new Group()
	for (var x = 0; x < width; x++) {
		for (var z = 0; z < depth; z++) {
			var cube = new HomeRoofCube();
			cube.position.x = x;
			cube.position.z = z;
			pivotGround.add(cube);
		}
	}
	return pivotGround	
}

export function createLeavesCubes(width,depth)
    {
        var pivot = new Group()
        for (var x = 0; x < width; x++) {
            for (var z = 0; z < depth; z++) {
                var cube = new LeavesCube();
                cube.castShadow = true;
                cube.receiveShadow = true;
                cube.position.x = x;
                cube.position.z = z;
                pivot.add(cube);
            }
        }
        return pivot  
    }