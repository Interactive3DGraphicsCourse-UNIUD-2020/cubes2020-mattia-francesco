import * as THREE from './build/three.module.js';

import {Meshes, MeshType} from './Meshes.js';


var meshes = new Meshes();
/*
	Input: 
	Output: Create a 1 x 1 x 1 Cube with a material defined by the selected cube's extension
*/
class Cube extends THREE.Object3D
{
	constructor(meshType)//(texturePath)
	{
		super();
		this.add(meshes.getMesh(meshType));
	}
}

class GroundCube extends Cube
{
	constructor()
	{
		super(MeshType.GROUND);
	}
}


class TrunkCube extends Cube
{
	constructor()
	{
		super(MeshType.TRUNK);
	}
}

class LeavesCube extends Cube
{
	constructor()
	{
		super(MeshType.LEAVES);
	}
}

class OceanCube extends Cube
{
	constructor()
	{
		super(MeshType.OCEAN);
	}
}

class HomeWallCube extends Cube
{
	constructor()
	{
		super(MeshType.WALL);
	}
}

class HomeRoofCube extends Cube
{
	constructor()
	{
		super(MeshType.ROOF);
	}
}

class SolarCube extends Cube
{
	constructor()
	{
		super(MeshType.SUN);
	}
}

export {GroundCube,TrunkCube,LeavesCube, OceanCube, HomeWallCube, HomeRoofCube,SolarCube};