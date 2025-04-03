// Factory Pattern

var rectangle = function(width, height) {
    return {
        width : width,
        height : height,
        draw: function(){
            console.log(`I'm Factory rectange`);
            this.print();
        },
        print: function(){
            console.log(`heigh is ${this.height}`);
            console.log(`width is ${this.width}`);
        }
    }
}

var rect1 = rectangle(10, 20);
rect1.draw();

// Constructor Pattern

var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;

    this.draw = function() {
        console.log(`I'm rectange Constructor`);
        this.print();
    }
    this.print = function() {
        console.log(`heigh is ${this.height}`);
        console.log(`width is ${this.width}`);
    }
}

var rect = new Rectangle (10, 20);
rect.draw();