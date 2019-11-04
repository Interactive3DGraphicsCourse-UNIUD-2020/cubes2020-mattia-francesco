import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import { PlanetCube } from './Cube.js';

export class Planet extends Group {
    constructor(x,y,z)
	{
		super();

        var functionPivot = new Group();   

        functionPivot = this.createCube(z,x);
        this.add(functionPivot);

        functionPivot = this.createCube(z,y);
        functionPivot.position.y = y;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);
 
        functionPivot = this.createCube(z,y);
        functionPivot.position.y = y;
        functionPivot.position.z = x;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = this.createCube(x,y);
        functionPivot.position.y = y;
        functionPivot.rotation.x = 90 * Math.PI/180;
        functionPivot.rotation.z = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = this.createCube(x,y);
        functionPivot.position.y = y;
        functionPivot.position.x = z; 
        functionPivot.rotation.x = 90 * Math.PI/180;
        functionPivot.rotation.z = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = this.createCube(z,x);
        functionPivot.position.y = y
        this.add(functionPivot)  
    }

    createCube(width,height) {
        var pivotGround = new THREE.Object3D()
        for (var x = 0; x < width; x++) {
            for (var z = 0; z < height; z++) {
                var cube = new PlanetCube();
                cube.position.x = x;
                cube.position.z = z;
                pivotGround.add(cube);
            }
        }
        return pivotGround	
    }
}
