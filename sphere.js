import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import {Cube} from './Cube.js';
import * as Ground from './Ground.js';

var WAVE_LENGTH = 8;
var WAVE_HEIGHT = 1/4;

export class Spehere extends Group
{
	constructor(diameter)
	{
		super();

		this.rows = [];

        var globalPivot = Group();
        var functionPivot = Group();
        for (height=1;height<=diameter;height++) {
            functionPivot = Ground.createCube(height,height,0x00ff00);
            globalPivot.add(functionPivot);
            functionPivot.position.y = height;
        }
        for (height = diameter - 1; height <= 1; height++) {
            functionPivot = Ground.createCube(height,height,0x00ff00);
            globalPivot.add(functionPivot);
            functionPivot.position.y = height;
        }
	}
}

export {Group};