import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import { HomeWallCube ,HomeRoofCube} from './Cube.js';

export class Home extends Group {
    constructor(x,y,z)
	{
        super();
        this.walls = new Walls(x,y,z);
        this.add(this.walls);

        this.roof = new Roof(x+2,z+2);
        this.roof.position.y = y+1;
        this.roof.position.x --;
        this.roof.position.z --;
		this.add(this.roof);
    }

}

class Roof extends Group {
    constructor(x,z) {
        super();
        var functionPivot = new Group();
        var heightRoof = 0;
        var centerXPivot = 0;
        var centerZPivot = 0;
        while (x >= 1 && z >=1) {
            functionPivot = this.createRoofCube(z,x);
            this.add(functionPivot);
            functionPivot.position.y = heightRoof;
            functionPivot.position.x = centerXPivot;
            functionPivot.position.z = centerZPivot;
            x = x-2;
            z= z-2;
            heightRoof++;
            centerZPivot++;
            centerXPivot++;
        }
    }
    createRoofCube(width,height) {
        var pivotGround = new Group()
        for (var x = 0; x < width; x++) {
            for (var z = 0; z < height; z++) {
                var cube = new HomeRoofCube();
                cube.position.x = x;
                cube.position.z = z;
                pivotGround.add(cube);
            }
        }
        return pivotGround	
    }
}

class Walls extends Group {
    constructor(x,y,z)
	{
		super();

        var functionPivot = new Group();   

        /*
        functionPivot = this.createWallCube(z,x);
        this.add(functionPivot);
        */

        functionPivot = this.createWallCube(z,y);
        functionPivot.position.y = y;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);
 
        functionPivot = this.createWallCube(z,y);
        functionPivot.position.y = y;
        functionPivot.position.z = x-1;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = this.createWallCube(x,y);
        functionPivot.position.y = y;
        functionPivot.rotation.x = 90 * Math.PI/180;
        functionPivot.rotation.z = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = this.createWallCube(x,y);
        functionPivot.position.y = y;
        functionPivot.position.x = z-1; 
        functionPivot.rotation.x = 90 * Math.PI/180;
        functionPivot.rotation.z = 90 * Math.PI/180;
        this.add(functionPivot);
    }

    createWallCube(width,height) {
        var pivotGround = new Group()
        for (var x = 0; x < width; x++) {
            for (var z = 0; z < height; z++) {
                var cube = new HomeWallCube();
                cube.position.x = x;
                cube.position.z = z;
                pivotGround.add(cube);
            }
        }
        return pivotGround	
    }
}