import * as THREE from './build/three.module.js';

var SIDE_SIZE = 1;

const MeshType = {
	GROUND: 0,
	TRUNK: 1,
	LEAVES: 2,
	OCEAN: 3,
	WALL: 4,
	ROOF: 5,
	SUN: 6,
	WIREFRAME: 7
};
const MESH_TYPES_NUMBER = MeshType.WIREFRAME+1;

//Define Meshes based MeshType selected
class Meshes
{
	constructor()
	{
		var textureLoader = new THREE.TextureLoader();
		var dirtTexture = textureLoader.load("textures/sand.png");
		var trunkTexture = textureLoader.load("textures/log.png");
		var leavesTexture = textureLoader.load("textures/leaves.png");
		var bricksTexture = textureLoader.load("textures/bricks.png");
		var stoneTexture = textureLoader.load("textures/stone.png");

		this.geometry = new THREE.BoxBufferGeometry(SIDE_SIZE, SIDE_SIZE, SIDE_SIZE);
		this.materials = new Array(MESH_TYPES_NUMBER);

		this.materials[MeshType.GROUND] = new THREE.MeshPhongMaterial({map: dirtTexture /*color: 0x654321*/});
		this.materials[MeshType.TRUNK] = new THREE.MeshPhongMaterial({map: trunkTexture /*color: 0x654321*/});
		this.materials[MeshType.LEAVES] = new THREE.MeshPhongMaterial({map: leavesTexture /*color: 0x00ff00*/});
		this.materials[MeshType.OCEAN] = new THREE.MeshPhongMaterial({color: 0x0099FF, transparent: true, opacity: 0.2});
		this.materials[MeshType.WALL] = new THREE.MeshPhongMaterial({map: stoneTexture /*color: 0xc2c5cc*/});
		this.materials[MeshType.ROOF] = new THREE.MeshPhongMaterial({map: bricksTexture /*color: 0xcb4154*/});
		this.materials[MeshType.SUN] = new THREE.MeshPhongMaterial({color: 0xf9d71c});

		this.wireframeGeometry = new THREE.EdgesGeometry(this.geometry);
		this.materials[MeshType.WIREFRAME] = new THREE.LineBasicMaterial({color: 0x999999, linewidth: 4});

		this.wireframeGeometry.scale(1.01, 1.01, 1.01)
	}

	/*
		Input: the material
		Output: mesh
	*/
	getMesh(meshType)
	{
		var mesh;

		if(meshType == MeshType.WIREFRAME)
			mesh = new THREE.LineSegments(this.wireframeGeometry, this.materials[meshType]);
		else
			mesh = new THREE.Mesh(this.geometry, this.materials[meshType]);
		
		//All objects have shadow except the sun, he is the light
		if(meshType != MeshType.SUN && meshType != MeshType.OCEAN)
		{
			mesh.castShadow = true;
			mesh.receiveShadow = true;
		}
		
		return mesh;
	}
}

export {Meshes, MeshType};