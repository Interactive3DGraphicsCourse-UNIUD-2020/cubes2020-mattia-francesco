import * as THREE from './build/three.module.js';

import * as Utils from './utils.js';

import * as Square from './Square.js';
import {Ocean, Group} from './Ocean.js';
import {Creeper} from './Creeper.js';

import {Tree} from './Tree.js';
import {Home} from './Home.js';
import {HeightMap} from './Heightmap.js';
import { SolarCube } from './Cube.js';

var width = 40;		//scene width
var depth = 60;		//scene depth

var ANIMATION_DURATION = 4000*4;		//in milliseconds

class World
{
	constructor()
	{
		//Setup camera & scene
		this.sceneGroup = new Group();
		this.sceneGroup.position.x = -width/2;
		this.sceneGroup.position.z = -depth/2;

		this.scene = new THREE.Scene();
		this.scene.add(this.sceneGroup);

		this.camera = new THREE.PerspectiveCamera(75, Utils.getRatio(), 0.1, 1000);	
		this.camera.position.set(25, 15, 25);

		//Sun
		var sun = new SolarCube();
		sun.scale.set(7,7,7);
		sun.position.y = 50;

		this.pivotSun = new Group();
		this.pivotSun.add(sun);

		this.pivotSun.position.x = width/2;
		this.pivotSun.position.z = depth/2;

		this.pivotSun2 = new Group();
		this.pivotSun2.add(this.pivotSun);

		this.pivotSun2.rotateY(25 * Math.PI / 180);

		this.sceneGroup.add(this.pivotSun2);

		//Setup lights
		this.initLights();

		//Setup ground
		var pivotGround = Square.createGround(width,depth);
		pivotGround.position.y = -5;
		this.sceneGroup.add( pivotGround );

		//Setup ocean
		this.ocean = new Ocean(width, depth/2);
		this.sceneGroup.add(this.ocean);

		this.ocean.position.z = depth/2;
		this.ocean.position.y--;

		//Tree
		this.tree = new Tree(5,5);
		this.sceneGroup.add(this.tree);
		this.tree.position.z = width/2;
		this.tree.position.x = width/2;
		
		//Tree
		this.tree = new Tree(5,5);
		this.sceneGroup.add(this.tree);
		this.tree.position.z = 17;
		this.tree.position.x = 10;
		
		//Tree
		this.tree = new Tree(7,7);
		this.sceneGroup.add(this.tree);
		this.tree.position.z = 9;
		this.tree.position.x = 25;
		
		//Tree
		this.tree = new Tree(5,5);
		this.sceneGroup.add(this.tree);
		this.tree.position.z = 7;
		this.tree.position.x = 35;
		
		//Tree
		this.tree = new Tree(5,5);
		this.sceneGroup.add(this.tree);
		this.tree.position.z = 17;
		this.tree.position.x = 32;

		//Home
		this.home = new Home(3,4,5);
		this.sceneGroup.add(this.home);
		this.home.position.z = 0;
		this.home.position.x = 3;
		this.home.position.y = 5;

		//Home
		this.home = new Home(3,3,3);
		this.sceneGroup.add(this.home);
		this.home.position.z = 17;
		this.home.position.x = 35;

		//Creeper
		this.creeper = new Creeper();
		this.sceneGroup.add(this.creeper);
		this.creeper.position.set(width/2, 0.5, width/2);

		//Height map
		var heightMap = new HeightMap("textures/heightmap.png", 10);
		heightMap.add(pivotGround);
		heightMap.apply();

		//Animations
		this.startTime = Date.now();
	}

	/*
		Define lights of scena
	*/
	initLights()
	{
		dirLight.castShadow = true;
		dirLight.shadow.mapSize.width = 1024;
		dirLight.shadow.mapSize.height = 1024;

		//SunLight
		var sunLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
		sunLight.castShadow = true;
		sunLight.target.position.set(width/2, 0, depth/2);
		sunLight.position.y = 50;
		sunLight.shadow.camera.left = sunLight.shadow.camera.bottom = -50;
		sunLight.shadow.camera.right = sunLight.shadow.camera.top = 50;

		this.pivotSun.add(sunLight);

		//AmbientLight
		var ambientLight = new THREE.AmbientLight(0x999999)
		this.sceneGroup.add(ambientLight)
	}

	update()
	{
		var currentSecond = (Date.now()-this.startTime);
		var amount = currentSecond/ANIMATION_DURATION;
		var rotation = 2*Math.PI*amount;

		//Animation
		this.pivotSun.rotation.set(rotation/2, 0, 0);
		this.ocean.update(amount);
		this.creeper.update(amount);
	}
}

export {World};