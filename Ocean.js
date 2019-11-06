import * as THREE from './build/three.module.js';
import {BufferGeometryUtils} from './jsm/utils/BufferGeometryUtils.js'

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

				/*
				cube.traverse((object) =>
				{
					if(object.isMesh)
					{
						object.geometry.translate(x, 0, z);
						geometries.push(object.geometry);
					}
				});
				*/
			}
			
			/*
			var mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries);
			var mergedMesh = new THREE.Mesh(mergedGeometry, new THREE.MeshPhongMaterial({color: 0x0099FF, transparent: true, opacity: 0.2}));
			super.add(mergedMesh);
			*/
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