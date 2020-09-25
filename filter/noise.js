function noise(image, canvas, context) {

    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            if (Math.random() * 100 > 90) {
                let pixel = image.getPixel(x, y);
                pixel.setRGB(255,255,255);
            }
        }
    }
}