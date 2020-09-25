function gaussien(image) {

    const copy = image.getPixelsCopy();
    const convolution = [
        [1,2,3,2,1],
        [2,6,8,6,2],
        [3,8,10,8,3],
        [2,6,8,6,2],
        [1,2,3,2,1],
    ];
    const convolutionSize = 5;

    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {

            let sum = [0,0,0];
            let count = 0;

            for (let localX = 0; localX < convolutionSize; localX++) {
                for (let localY = 0; localY < convolutionSize; localY++) {
                    const mx = x + localX - 2;
                    const my = y + localY - 2;
                    if (mx >= 0 && my >= 0 && mx < image.width && my < image.height) {
                        const covolutionLocal = convolution[localX][localY]
                        const copypixel = copy[mx][my];
                        sum[0] += copypixel[0] * covolutionLocal
                        sum[1] += copypixel[1] * covolutionLocal
                        sum[2] += copypixel[2] * covolutionLocal
                        count += covolutionLocal;
                    }
                }
            }
            const pixel = image.getPixel(x,y);
            pixel.setRGB(sum[0]/count, sum[1]/count, sum[2]/count);
        }
    }
}