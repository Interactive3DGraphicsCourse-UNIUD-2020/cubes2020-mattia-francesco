import * as THREE from './build/three.module.js';

//http://danni-three.blogspot.it/2013/09/threejs-heightmaps.html
class HeightMap
{
	constructor(path, maxHeight)
	{
		this.path = path;
		this.maxHeight = maxHeight;

		this.objects = [];
	}

	add(object)
	{
		this.objects.push(object);
	}

	apply()
	{
		var loader = new THREE.ImageLoader();

		loader.load(this.path, (img) => {
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

			console.log(imgd);

			var j=0;
			for(var i=0;i<pix.length;i+=4)
			{
				var all = pix[i]+pix[i+1]+pix[i+2];  // all is in range 0 - 255*3
				data[j++] = all/3/255;   
			}

			if(this.maxHeight == undefined)
				this.maxHeight = 1;

			this.objects.forEach((object) =>
			{
				var pixel = 0;

				object.children.forEach((child) =>
				{
					if(true)
					{
						child.position.y = data[pixel]*this.maxHeight;

						pixel++;
					}
				});
			});
		});
	}
}

export {HeightMap};