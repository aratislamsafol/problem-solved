// pass by Value
let data = 2;

function x(datas){
    datas = 4;
    console.log(datas);
}
x(data);

console.log(`outer ${data}`);
// pass by refference
let data2 = {
    a : 10,
    b : 20
};

function y(data) {
    data.a = 30;
    data.b = 40;
}
y(data2);

console.log(data2);