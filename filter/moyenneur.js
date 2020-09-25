function moyenneur(image, size) {
    const copy = image.getPixelsCopy();

    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {

            let sum = [0,0,0];
            let count = 0;

            for (let localX = -size; localX < size; localX++) {
                for (let localY = -size; localY < size; localY++) {
                    const mx = x + localX;
                    const my = y + localY;
                    if (mx >= 0 && my >= 0 && mx < image.width && my < image.height) {
                        const copypixel = copy[mx][my];
                        sum[0] += copypixel[0]
                        sum[1] += copypixel[1]
                        sum[2] += copypixel[2]
                        count++;
                    }
                }
            }
            const pixel = image.getPixel(x,y);
            pixel.setRGB(sum[0]/count, sum[1]/count, sum[2]/count);
        }
    }
}