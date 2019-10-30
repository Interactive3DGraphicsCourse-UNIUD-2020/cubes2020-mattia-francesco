import * as THREE from './build/three.module.js';

class Cube extends THREE.Mesh
{
	const SIDE_SIZE = 0.5;

	constructor(texturePath)
	{
		var texture = THREE.ImageUtils.loadTexture(texturePath);	//'textures/11635.jpg'
		var materialParams = {
			//color: color
			map: texture
		};

		var geometry = new THREE.BoxGeometry(SIDE_SIZE, SIDE_SIZE, SIDE_SIZE);
		var material = new THREE.MeshPhongMaterial(materialParams);

		super(geometry, material);
	}
}

export {Group};