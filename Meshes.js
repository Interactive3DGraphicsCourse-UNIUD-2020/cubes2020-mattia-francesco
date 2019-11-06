import * as THREE from './build/three.module.js';

var SIDE_SIZE = 1;

const MeshType = {
	GROUND: 0,
	TRUNK: 1,
	LEAVES: 2,
	OCEAN: 3,
	Wall: 4,
	Roof: 5,
	//inserire nuovi tipi qui
	WIREFRAME: 6
};
const MESH_TYPES_NUMBER = MeshType.WIREFRAME+1;

class Meshes
{
	constructor(colors)//(texturePath)
	{
		var dirtTexture = THREE.ImageUtils.loadTexture("textures/sand.png");
		var trunkTexture = THREE.ImageUtils.loadTexture("textures/log.png");
		var leavesTexture = THREE.ImageUtils.loadTexture("textures/leaves.png");
		var bricksTexture = THREE.ImageUtils.loadTexture("textures/bricks.png");
		var stoneTexture = THREE.ImageUtils.loadTexture("textures/stone.png");

		//this.geometry = new THREE.BoxGeometry(SIDE_SIZE, SIDE_SIZE, SIDE_SIZE);
		this.geometry = new THREE.BoxBufferGeometry(SIDE_SIZE, SIDE_SIZE, SIDE_SIZE);
		this.materials = new Array(MESH_TYPES_NUMBER);

		this.materials[MeshType.GROUND] = new THREE.MeshPhongMaterial({map: dirtTexture /*color: 0x654321*/});
		this.materials[MeshType.TRUNK] = new THREE.MeshPhongMaterial({map: trunkTexture /*color: 0x654321*/});
		this.materials[MeshType.LEAVES] = new THREE.MeshPhongMaterial({map: leavesTexture /*color: 0x00ff00*/});
		this.materials[MeshType.OCEAN] = new THREE.MeshPhongMaterial({color: 0x0099FF, transparent: true, opacity: 0.2});
		this.materials[MeshType.Wall] = new THREE.MeshPhongMaterial({map: stoneTexture /*color: 0xc2c5cc*/});
		this.materials[MeshType.Roof] = new THREE.MeshPhongMaterial({map: bricksTexture /*color: 0xcb4154*/});

		this.wireframeGeometry = new THREE.EdgesGeometry(this.geometry);
		this.materials[MeshType.WIREFRAME] = new THREE.LineBasicMaterial({color: 0x999999, linewidth: 4});

		this.wireframeGeometry.scale(1.01, 1.01, 1.01)
	}

	getMesh(meshType)
	{
		var mesh;

		if(meshType == MeshType.WIREFRAME)
			mesh = new THREE.LineSegments(this.wireframeGeometry, this.materials[meshType]);
		else
			mesh = new THREE.Mesh(this.geometry, this.materials[meshType]);

		return mesh;
	}
}

export {Meshes, MeshType};