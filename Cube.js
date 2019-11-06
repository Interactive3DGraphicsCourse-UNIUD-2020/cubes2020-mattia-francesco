import * as THREE from './build/three.module.js';

import {Meshes, MeshType} from './Meshes.js';


var meshes = new Meshes();

class Cube extends THREE.Object3D
{
	constructor(meshType)//(texturePath)
	{
		super();

		this.add(meshes.getMesh(meshType));
		this.add(meshes.getMesh(MeshType.WIREFRAME));
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

export {GroundCube, TrunkCube, LeavesCube, OceanCube};

class PlanetCube extends Cube
{
	constructor()
	{
		super(MeshType.AIR);
	}
}

export {Cube,GroundCube,TrunkCube,LeavesCube, OceanCube, PlanetCube};