function binary(image) {
    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            let pixel = image.getPixel(x, y)
            let moy = pixel.average();
            if (moy > 128) {
                pixel.setRGB(255,255,255);
            } else {
                pixel.setRGB(0,0,0);
            }
        }
    }
}