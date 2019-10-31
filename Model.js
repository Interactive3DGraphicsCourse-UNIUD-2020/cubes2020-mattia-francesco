import * as THREE from './build/three.module.js';

import {FBXLoader} from './jsm/loaders/FBXLoader.js';

export function load(path, onSuccess, onError)
{
	var loader = new FBXLoader();

	loader.load("models/"+path, function(object)
	{
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
		
		onSuccess(object);
	}, () => {}, onError);
}