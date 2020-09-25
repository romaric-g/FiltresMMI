function blueGrid(image, canvas, context) {
    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            let pixel = image.getPixel(x, y)
            pixel.setBlue(255 - pixel.getBlue());
            pixel.setRed(255 - pixel.getRed());
            pixel.setGreen(255 - pixel.getGreen());
            if(x % 4 === 0 && y % 4 === 0 ) {
                pixel.setRGB(255,255,255);
            }
        }
    }
}