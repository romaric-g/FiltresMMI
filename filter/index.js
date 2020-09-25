

function updateFilters() {
	var photo = document.getElementById('photo');
	var canvas = document.getElementById('mycanvas');
	var context = canvas.getContext('2d');

	x = 0;
    y = 0;
    width = canvas.width;
    height = canvas.height;
    
    var imgd = context.getImageData(x, y, width, height);
	var pix = imgd.data;
	
	const image = new FilterImage(pix, width, height);

	appylFilter(image, canvas, context)

	// Draw the ImageData at the given (x,y) coordinates.
	context.putImageData(imgd, x, y);

	var data = canvas.toDataURL('image/png');
	photo.setAttribute('src', data);
}


function appylFilter(image, canvas, context) {
	const filterValue = document.getElementById('selectID').value;

	switch (filterValue) {
		case 'blueGrid': 
			blueGrid(image, canvas, context); break;
		case 'grayFilter': 
			grayFilter(image, canvas, context); break;
		case 'kaleidoscope': 
			kaleidoscope(image, canvas, context); break;
		case 'noise': 
			noise(image, canvas, context); break;
		case 'verticalSplit': 
			verticalSplit(image, canvas, context); break;
		case 'pixelise': 
			pixelise(image, 5); break;
		case 'binary':
			binary(image); break;
		case 'moyenneur':
			moyenneur(image, 5); break;
		case 'gaussien':
			gaussien(image); break;
	}
}	