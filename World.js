import * as THREE from './build/three.module.js';

import * as Utils from './utils.js';

import * as Ground from './Ground.js';
import {Ocean} from './Ocean.js';
import {Creeper} from './Creeper.js';

import {Tree} from './Tree.js';
import {HeightMap} from './Heightmap.js';


var ANIMATION_DURATION = 4000;		//in milliseconds

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

		var length = 60;
		var depth = 60;

		//Setup ground
		var pivotGround = Ground.createGround(length,depth);
		this.scene.add( pivotGround );

		//Setup ocean
		this.ocean = new Ocean(length, depth);
		this.scene.add(this.ocean);

		this.ocean.position.z = length;

		//Tree
		this.tree = new Tree(5,5);
		this.scene.add(this.tree);
		this.tree.position.z = length/2;
		this.tree.position.x = length/2;
		
		//Creeper
		this.creeper = new Creeper();
		this.scene.add(this.creeper);
		this.creeper.position.set(length/2, 1, length/2);

		//Height map
		var heightMap = new HeightMap("textures/heightmap.png", 3);
		heightMap.add(pivotGround);
		heightMap.apply();

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
		this.creeper.update(amount);
	}
}

export {World};