function kaleidoscope(image, canvas, context) {

    for (let x = 0; x < image.width / 2; x++) {
        for (let y = 0; y < image.height; y++) {
            let pixel = image.getPixel(x, y);
            let pixelTaget = image.getPixel(image.width - x, y);
            pixelTaget.setPixel(pixel)
        }
    }
}