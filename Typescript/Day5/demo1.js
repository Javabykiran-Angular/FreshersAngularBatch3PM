var arr = [2, 3, 4, 5];
//for each
// arr.forEach((myvalue,i)=>{
//     console.log("My Value is "+myvalue+" index is "+i);
// });
var arr1 = [];
// 2 way to insert a dynamic value into the array
//1 using push & pop Method it works on LIFO principle
//2 Using Splice Method
//1 Way using push & pop
// arr1.push(45);
// console.log(arr1);
// arr1.push(50);
// console.log(arr1);
// arr1.push(32);
// console.log(arr1);
// var temp1=arr1.pop();
// console.log(arr1);
// console.log("Poped Value is "+temp1);
// var temp2=arr1.pop();
// console.log(arr1);
// console.log("Poped Value is "+temp2);
//2 way using splice method
var arr2 = [10, 20, 50, 40];
// console.log(arr2);
// arr2.splice(2,0,11);
// console.log(arr2);
// arr2.splice(1,0,12,25,4,8);
// console.log(arr2);
// arr2.splice(2,1);
// console.log(arr2);
// arr2.splice(2,3);
// console.log(arr2);
// arr2.splice(3,1,88);
// console.log(arr2);
var arr3 = [55, 23, 11, 67, 2, 50, 1];
//slice => it is used for to copy a particular data
// console.log("Original data "+arr3);
// var temp=arr3.slice(1,5);
// // console.log("copied data "+temp);
// var temp1=arr3.slice(2);
// // console.log("copied data "+temp1);
// var temp2=arr3.slice();
// console.log("copied data "+temp2);
//map 
var arr4 = [2, 3, 4, 5];
var temp4 = arr4.map(function (value, i) {
    return (value * value);
});
// console.log("Original Array "+arr4);
// console.log("Resultant Array "+temp4);
var temp5 = arr4.map(function (value, i) {
    if (i == 2 || i == 3) {
        return (value * value);
    }
});
//  console.log("Result array "+temp5.join(" "));
//Rest Parameter Function
function display() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    for (var i = 0; i < value.length; i++) {
        console.log("Value is " + value[i]);
    }
}
// display(12,20);
display(12, 20, 3, 45, 56, 7, 23, 11);
