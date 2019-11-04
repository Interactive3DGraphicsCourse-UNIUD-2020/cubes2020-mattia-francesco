import * as THREE from './build/three.module.js';

import {GLTFLoader} from './jsm/loaders/GLTFLoader.js';

import {Group} from './Group.js'

export function load(path, newHeight, onSuccess, onError)
{
	var loader = new GLTFLoader();

	loader.load("models/"+path, function(object)
	{
		object = object.scenes[0].children[0];

		//var mixer = new THREE.AnimationMixer(object);

		//var action = mixer.clipAction(object.animations[0]);
		//action.play();

		object.traverse(function(child)
		{
			if(child.isMesh)
			{
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});

		//var boundingBox = object.geometry.computeBoundingBox();
		var boundingBox = new THREE.Box3().setFromObject(object);
		var oldSize = new THREE.Vector3();
		boundingBox.getSize(oldSize);
		var scaleFactor = newHeight/oldSize.y;

		object.scale.set(scaleFactor, scaleFactor, scaleFactor);
		//object.scale.setLength(scaleFactor);

		object.position.y = newHeight/2;

		onSuccess(object);
	}, () => {}, onError);
}