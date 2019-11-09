import * as Square from './Square.js';
import {Group} from './Group.js';
import {TrunkCube} from './Cube.js';

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
            functionPivot = Square.createLeavesCubes(height,height,color);
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
            functionPivot = Square.createLeavesCubes(height,height,color);
            this.add(functionPivot);
            functionPivot.position.y = heightPivot;
            functionPivot.position.z = -centerPivot;
            functionPivot.position.x = -centerPivot;
            heightPivot++;
        }
	}
}

class Trunk extends Group {
    constructor(height)
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
