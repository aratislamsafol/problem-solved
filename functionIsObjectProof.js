// Proof 1

function test(){
    console.log('someting!');
}
console.log(test.constructor);  // output [Function: Function , browser - ƒ Function() { [native code] }]


// proof 2
var Rect = new Function('width', 'height', `this.width = width;
    this.height = height;

    this.draw = function() {
        console.log('Im rectange Constructor');
        this.print();
    }
    this.print = function() {
        console.log(this.height);
        console.log(this.width);
    }`)

    var rect2 = new Rect(10, 20);
    console.log(rect2);

    // proof 3
    // basically function vitore vitore eivabey choley ekta object derive kore Function theke kichu args niyea
    var test2 = new Function('a', 'b', 'console.log(b)');
    test2(1, 2);