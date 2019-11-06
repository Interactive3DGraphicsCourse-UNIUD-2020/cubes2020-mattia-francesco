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
		super(0x0000FF);

		this.material.transparent = true;
		this.material.opacity = 0.1;
	}
}

export {Cube, OceanCube, PlanetCube};