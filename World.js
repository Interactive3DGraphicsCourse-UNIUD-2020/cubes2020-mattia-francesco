import * as THREE from './build/three.module.js';

import * as Utils from './utils.js';

import * as Ground from './Ground.js';
import {Ocean} from './Ocean.js';

import * as Model from './Model.js';


var ANIMATION_DURATION = 1000;		//in milliseconds

class World
{
	constructor()
	{
		//Setup camera & scene
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, Utils.getRatio(), 0.1, 1000);
			
		this.camera.position.set(2,2,2);
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		//Setup lights
		this.initLights();

		//Setup ground
		var pivotGround = Ground.createGround(5,5);
		this.scene.add( pivotGround );

		//Setup ocean
		this.ocean = new Ocean(20, 20);
		this.scene.add(this.ocean);

		//Creeper
		var model = Model.load("Zomb.FBX", (creeper) => {
			this.scene.add(creeper);
		}, (error) => { alert(error); });

		//Animations
		this.startTime = Date.now();
	}

	initLights()
	{
		var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
		hemiLight.color.setHSL(0.6, 1, 0.6);
		hemiLight.groundColor.setHSL(0.095, 1, 0.75);
		hemiLight.position.set(0, 500, 0);
		//this.scene.add(hemiLight);

		var dirLight = new THREE.DirectionalLight(0xffffff, 1);
		dirLight.color.setHSL(0.1, 1, 0.95);
		dirLight.position.set(-1, 1.75, 1);
		dirLight.position.multiplyScalar(50);
		//this.scene.add(dirLight);
		dirLight.castShadow = true;
		dirLight.shadow.mapSize.width = 1024;
		dirLight.shadow.mapSize.height = 1024;

		//just for test
		var ambientLight = new THREE.AmbientLight(0xffffff)
		this.scene.add(ambientLight)
	}

	update()
	{
		var currentSecond = (Date.now()-this.startTime)%ANIMATION_DURATION;
		var amount = currentSecond/ANIMATION_DURATION;

		this.ocean.update(amount);
	}
}

export {World};