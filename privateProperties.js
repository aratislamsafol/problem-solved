var Rectangle = function (width, height) {
    this.width = width;
    this.height = height

    var position = {
        x: 20,
        y: -50    
    }

    var print = function () {
        console.log(`private properties`);
        console.log(`height - ${height} width - ${width}`);
    }

    this.draw = function () {
        console.log(`Normal Object properties`);
        print();
        console.log(position.x , position.y);
    }

    Object.defineProperty(this, 'posi',{
        get: function() {
            return position;
        },
        //  jodi set korte chai tobey
        set:function(value){
            position = value;
        }
    })
}

const rect2 = new Rectangle(10, 20);
rect2.draw();
rect2.posi = {x: 200, y: 400}
console.log(rect2.posi)