import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import * as Ground from './Ground.js';

export class Planet extends Group {
    constructor(x,y,z,color)
	{
		super();

        var functionPivot = new Group();   

        functionPivot = Ground.createCube(x,z,color);
        this.add(functionPivot);

        functionPivot = Ground.createCube(y,z,color);
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);
 
        functionPivot = Ground.createCube(y,z,color);
        functionPivot.position.x = x;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = Ground.createCube(x,z,color);
        functionPivot.position.y = y
        this.add(functionPivot)  
    }
}
