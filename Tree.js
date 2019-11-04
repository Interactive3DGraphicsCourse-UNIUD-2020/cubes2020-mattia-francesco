import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import {Cube} from './Cube.js';
import * as Ground from './Ground.js';

export class Sphere extends Group
{
	constructor(diameter,color)
	{
		super();

		this.rows = [];

        var functionPivot = new Group();
        var heightPivot = 0;
        var centerPivot = 0;
        for (var height=1;height<=diameter;height+=2) {
            functionPivot = Ground.createCube(height,height,color);
            this.add(functionPivot);
            functionPivot.position.y = heightPivot;
            functionPivot.position.z = -centerPivot;
            functionPivot.position.x = -centerPivot;
            heightPivot++;
            centerPivot++;
        }
        centerPivot--;

        for (var height = diameter - 2; height >= 1; height-=2) {
            centerPivot--;
            functionPivot = Ground.createCube(height,height,color);
            this.add(functionPivot);
            functionPivot.position.y = heightPivot;
            functionPivot.position.z = -centerPivot;
            functionPivot.position.x = -centerPivot;
            heightPivot++;
        }
	}
}

export class Trunk extends Group {
    constructor(height,color)
	{
		super();

        this.rows = [];
        
        for (var i = 0; i < height; i++) {
            var cube = new Cube(color)
			cube.castShadow = true;
			cube.receiveShadow = true;
			cube.position.y = i
			this.add(cube);
        }
    }
}

export class Tree extends Group {
    constructor(height,leaves)
	{
		super();

        this.rows = [];
        
        this.trunk = new Trunk(height,0x654321);
        this.add(this.trunk);

        this.sphere = new Sphere(leaves,0x00ff00);
        this.sphere.position.y = height;
		this.add(this.sphere);
    }
}
