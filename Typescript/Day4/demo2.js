//optional parameter function
function add(a, b) {
    console.log("Value of A is " + a);
    console.log("Value of B is " + b);
    console.log("Addition is  " + (a + b));
}
// add(2);
// add();
var temp = function (a, b) {
    console.log("Value of A is " + a);
    console.log("Value of B is " + b);
    console.log("Addition is  " + (a + b));
};
// temp(3);
//default parameter function
function add2(a, b) {
    if (b === void 0) { b = 2.5; }
    console.log("Value of A is " + a);
    console.log("Value of B is " + b);
    console.log("Addition is  " + (a + b));
}
// function add2(a:number=7,b?:number){
//     console.log("Value of A is "+a);
//     console.log("Value of B is "+b);
//     console.log("Addition is  "+(a+b));
// }
// add2(4,5);
// add2(6,6)
// add2();
