/**
 * @author Romaric Gauzi
 * @create date 2020-09-23 16:30:06
 * @desc Manipuler facilement les pixels d'une image
 */

class FilterImage {

    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;

        this.lineSize = width * 4;
        this.pixelSize = 4;
    }   

    getPixel(x, y) {
        const pixelIndex = this.getLineIndexFromY(y) + this.getPixelIndexFromLine(x)
        return new FilterImagePixel(this.image, x, y, pixelIndex);
    }

    getPixelsCopy() {
        const pixels = new Array(this.width).fill().map(() => Array(this.height));
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                pixels[x][y] = this.getPixel(x, y).getPixelData()
            }
        }
        return pixels;
    }

    getLineIndexFromY(y) {
        return y * this.lineSize;
    }

    getLineFromY(y) {
        const lineIndex = this.getLineIndexFromY(y);
        return this.image.slice(lineIndex, lineIndex + this.lineSize);
    }

    getPixelIndexFromLine(x) {
        return x * this.pixelSize;
    }

    getPixelFromLine(line, x) {
        const pixelIndex = getPixelIndexFromLine(x);
        return line.slice(pixelIndex, pixelIndex + this.pixelSize);
    }
}


class FilterImagePixel {

    constructor(image, x, y, imageIndex) {
        this.image = image;
        this.x= Math.round(x);
        this.y = Math.round(y);
        this.imageIndex = imageIndex;
    }

    safeColor (color) {
        return Math.min(Math.max(color, 0), 255);
    }

    setColor (type, color) {
        this.image[this.imageIndex + type] = this.safeColor(color);
    }

    setRed (color) {
        this.setColor(0, color);
    }

    setGreen (color) {
        this.setColor(1, color);
    }

    setBlue (color) {
        this.setColor(2, color);
    }

    setAlpha(alpha) {
        this.setColor(3, alpha);
    }

    getHexa (type) {
        return this.image[this.imageIndex + type];
    }

    getRed () {
        return this.getHexa(0);
    }
    
    getGreen () {
        return this.getHexa(1);
    }

    getBlue () {
        return this.getHexa(2);
    }

    getAlpha() {
        return this.getHexa(3);
    }

    setRGB (r, g, b) {
        this.setRGBa(r,g,b)
    }

    setRGBa (r,g,b,a = null) {
        this.setRed(r)
        this.setGreen(g)
        this.setBlue(b)
        if (a) {
            this.setAlpha(a)
        }
    }
    
    setPixel (pixel) {
        this.setRGBa(
            pixel.getRed(), 
            pixel.getGreen(), 
            pixel.getBlue(), 
            pixel.getAlpha()
        )
    }

    average() {
        return (this.getRed() + this.getGreen() + this.getBlue()) / 3;
    }
    
    getPixelData() {
        return [this.getRed(), this.getGreen(), this.getBlue(), this.getAlpha()]
    }
}