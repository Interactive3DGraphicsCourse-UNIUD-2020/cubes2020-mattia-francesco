import {Group} from './Group.js';
import {OceanCube} from './Cube.js';

var WAVE_LENGTH = 8;
var WAVE_HEIGHT = 1/4;

export class Ocean extends Group
{
	constructor(width, depth)
	{
		super();

		this.rows = [];

		for(var z=0;z<depth;z++)
		{
			var row = new Group();
			this.rows.push(row);
			super.add(row);

			row.position.z = z;


			var geometries = [];


			for(var x=0;x<width;x++)
			{
				var cube = new OceanCube();
				row.add(cube);

				cube.position.x = x;

			}
		}
	}

	update(amount)
	{
		amount *= 2*Math.PI*8;

		for(var i=0;i<WAVE_LENGTH;i++)
		{
			var rowAmount = amount+2*Math.PI/WAVE_LENGTH*i;

			for(var j=i;j<this.rows.length;j+=WAVE_LENGTH)
				this.rows[j].position.y = Math.sin(rowAmount)*WAVE_HEIGHT;	
		}
	}
}

export {Group};