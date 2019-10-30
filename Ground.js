import * as THREE from './build/three.module.js';

export function createGround(width,height) {
	var geometry = new THREE.BoxGeometry(1,1,1);
	// var texture = THREE.ImageUtils.loadTexture('textures/11635.jpg');
	var color = 0x654321
	var material = new THREE.MeshPhongMaterial( { color: color /*map:texture*/} );
	var pivotGround = new THREE.Object3D()
	for (var x = 0; x <=  width; x++) {
		for (var z = 0; z <= height; z++) {
			var cube = new THREE.Mesh(geometry,material)
			cube.castShadow = true;
			cube.receiveShadow = true;
			cube.position.x = x;
			cube.position.z = z;
			pivotGround.add(cube);
		}
	}	
	return pivotGround;		
}
