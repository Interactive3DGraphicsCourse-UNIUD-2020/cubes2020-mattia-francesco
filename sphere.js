import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import {Cube} from './Cube.js';
import * as Ground from './Ground.js';

var WAVE_LENGTH = 8;
var WAVE_HEIGHT = 1/4;

export class Sphere extends Group
{
	constructor(diameter)
	{
		super();

		this.rows = [];

        var functionPivot = new Group();
        var heightPivot = 0;
        var centerPivot = 0;
        for (var height=1;height<=diameter;height+=2) {
            functionPivot = Ground.createCube(height,height,0x00ff00);
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
            functionPivot = Ground.createCube(height,height,0x00ff00);
            this.add(functionPivot);
            functionPivot.position.y = heightPivot;
            functionPivot.position.z = -centerPivot;
            functionPivot.position.x = -centerPivot;
            heightPivot++;
        }
	}
}

export {Group};