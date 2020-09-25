function grayFilter(image, canvas, context) {

    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            let pixel = image.getPixel(x, y);
            const sum = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRGB(sum,sum,sum)
        }
    }
}