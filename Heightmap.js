import * as THREE from './build/three.module.js';

import {Group} from './Group.js';
import {OceanCube} from './Cube.js';

var WAVE_LENGTH = 8;
var WAVE_HEIGHT = 1/4;

//http://danni-three.blogspot.it/2013/09/threejs-heightmaps.html
class HeightMap
{
	constructor(path)
	{
		if(scale == undefined)
			scale=1;

		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;

		var context = canvas.getContext("2d");

		var size = img.width * img.height;
		var data = new Float32Array(size);

		context.drawImage(img,0,0);

		for(var i=0;i<size;i++)
			data[i] = 0;

		var imgd = context.getImageData(0, 0, img.width, img.height);
		var pix = imgd.data;

		var j=0;
		for(var i=0;i<pix.length;i+=4)
		{
			var all = pix[i]+pix[i+1]+pix[i+2];  // all is in range 0 - 255*3
			data[j++] = scale*all/3;   
		}
	}

	applyTo(object)
	{
		
	}
}

export {HeightMap};