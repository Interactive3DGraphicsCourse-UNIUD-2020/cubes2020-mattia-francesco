import {Group} from './Group.js';
import * as Square from './Square.js';

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
            functionPivot = Square.createRoofCubes(z,x);
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
}

class Walls extends Group {
    constructor(x,y,z)
	{
		super();

        var functionPivot = new Group();   

        functionPivot = Square.createWallCubes(z-2,y);
        functionPivot.position.y = y;
        functionPivot.position.x = 1;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);
 
        functionPivot = Square.createWallCubes(z-2,y);
        functionPivot.position.y = y;
        functionPivot.position.x = 1;
        functionPivot.position.z = x-1;
        functionPivot.rotation.x = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = Square.createWallCubes(x,y);
        functionPivot.position.y = y;
        functionPivot.rotation.x = 90 * Math.PI/180;
        functionPivot.rotation.z = 90 * Math.PI/180;
        this.add(functionPivot);

        functionPivot = Square.createWallCubes(x,y);
        functionPivot.position.y = y;
        functionPivot.position.x = z-1; 
        functionPivot.rotation.x = 90 * Math.PI/180;
        functionPivot.rotation.z = 90 * Math.PI/180;
        this.add(functionPivot);
    }


}