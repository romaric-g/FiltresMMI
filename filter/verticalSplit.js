function verticalSplit(image, canvas, context) {

    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            if(x > image.width / 2) {
                let pixel = image.getPixel(x, y);
                pixel.setRGB(100,100,100);
            }
        }
    }
}