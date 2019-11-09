import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import {TrunkCube, LeavesCube} from './Cube.js';

class Sphere extends Group
{
	constructor(diameter,color)
	{
		super();

		this.rows = [];

        var functionPivot = new Group();
        var heightPivot = 0;
        var centerPivot = 0;
        for (var height=1;height<=diameter;height+=2) {
            functionPivot = this.createLeavesCubes(height,height,color);
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
            functionPivot = this.createLeavesCubes(height,height,color);
            this.add(functionPivot);
            functionPivot.position.y = heightPivot;
            functionPivot.position.z = -centerPivot;
            functionPivot.position.x = -centerPivot;
            heightPivot++;
        }
	}

    createLeavesCubes(width,depth)
    {
        var pivot = new THREE.Object3D()
        for (var x = 0; x < width; x++) {
            for (var z = 0; z < depth; z++) {
                var cube = new LeavesCube();
                cube.castShadow = true;
                cube.receiveShadow = true;
                cube.position.x = x;
                cube.position.z = z;
                pivot.add(cube);
            }
        }
        return pivot  
    }
}

class Trunk extends Group {
    constructor(height,color)
	{
		super();

        this.rows = [];
        
        for (var i = 0; i < height; i++) {
            var cube = new TrunkCube()
			cube.castShadow = true;
			cube.receiveShadow = true;
			cube.position.y = i
			this.add(cube);
        }
    }
}

//Create a Tree with a trunk and leaves
export class Tree extends Group {
    constructor(height,leaves)
	{
		super();

        this.rows = [];
        
        this.trunk = new Trunk(height);
        this.add(this.trunk);

        this.sphere = new Sphere(leaves);
        this.sphere.position.y = height;
		this.add(this.sphere);
    }
}
