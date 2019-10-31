import * as THREE from './build/three.module.js';

import {Group} from './Group.js';

var SIDE_SIZE = 1;

/*
class Cube extends THREE.Mesh
{
	constructor(color)//(texturePath)
	{
		var SIDE_SIZE = 0.9;

		//var texture = THREE.ImageUtils.loadTexture(texturePath);	//'textures/11635.jpg'
		var materialParams = {
			color: color
			//map: texture
		};

		var geometry = new THREE.BoxGeometry(SIDE_SIZE, SIDE_SIZE, SIDE_SIZE);
		var material = new THREE.MeshPhongMaterial(materialParams);

		super(geometry, material);
	}
}
*/
class Cube extends Group
{
	constructor(color)//(texturePath)
	{
		super();

		//var texture = THREE.ImageUtils.loadTexture(texturePath);	//'textures/11635.jpg'
		var materialParams = {
			color: color
			//map: texture
		};

		var geometry = new THREE.BoxGeometry(SIDE_SIZE, SIDE_SIZE, SIDE_SIZE);
		var material = new THREE.MeshPhongMaterial(materialParams);
		var fillMesh = new THREE.Mesh(geometry, material);

		var wireframeGeometry = new THREE.EdgesGeometry(geometry);
		var wireframeMaterial = new THREE.LineBasicMaterial({color: 0x999999, linewidth: 4});
		var wireframeMesh = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
		//wireframeMesh.renderOrder = 1;

		this.add(fillMesh);
		this.add(wireframeMesh);


		this.material = material;
	}
}

class OceanCube extends Cube
{
	constructor()
	{
		super(0x0099FF);

		this.material.transparent = true;
		this.material.opacity = 0.2;
	}
}

export {Cube, OceanCube};