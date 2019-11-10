import {Group} from './Group.js';

import {GroundCube, HomeWallCube, HomeRoofCube, LeavesCube} from './Cube.js';

function createCube(width, depth, allocFunction)
{
	var pivot = new Group();

	for (var z = 0; z < depth; z++)
	{
		for (var x = 0; x < width; x++)
		{
			var cube = allocFunction();

			cube.position.x = x;
			cube.position.z = z;

			pivot.add(cube);
		}
	}

	return pivot;
}


function createGround(width,depth)
{
	return createCube(width, depth, () => { return new GroundCube(); });
}

function createWallCubes(width,depth)
{
	return createCube(width, depth, () => { return new HomeWallCube(); });
}

function createRoofCubes(width,depth)
{
	return createCube(width, depth, () => { return new HomeRoofCube(); });
}

function createLeavesCubes(width,depth)
{
	return createCube(width, depth, () => { return new LeavesCube(); });
}

export {createGround, createWallCubes, createRoofCubes, createLeavesCubes};