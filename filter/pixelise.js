function pixelise(image, ratio) {
    console.log(pixelise)
    for (let x = 0; x < image.width; x+=ratio) {
        for (let y = 0; y < image.height; y+=ratio) {
            let sum = [0,0,0];
            let count = 0;
            for(let xLocal = 0; xLocal < ratio; xLocal++) {
                for(let yLocal = 0; yLocal < ratio; yLocal++) {
                    let xPixelLocal = x + xLocal;
                    let yPixelLocal = y + yLocal;
                    if (xPixelLocal < image.width && yPixelLocal < image.height) {
                        const pixel = image.getPixel(xPixelLocal, yPixelLocal);
                        sum[0] += pixel.getRed()
                        sum[1] += pixel.getGreen()
                        sum[2] += pixel.getBlue()
                        count++;
                    }
                }
            }
            const moy = [sum[0] / count, sum[1] / count, sum[2] / count]
            for(let xLocal = 0; xLocal < ratio; xLocal++) {
                for(let yLocal = 0; yLocal < ratio; yLocal++) {
                    const pixel = image.getPixel(x + xLocal, y + yLocal);
                    pixel.setRGB(moy[0], moy[1], moy[2])
                }
            }
        }
    }
}