//optional parameter function

function add(a?:number,b?:number){
    console.log("Value of A is "+a);
    console.log("Value of B is "+b);
    console.log("Addition is  "+(a+b));
}

// add(2);
// add();

var temp=(a:number,b?:number)=>{
    console.log("Value of A is "+a);
    console.log("Value of B is "+b);
    console.log("Addition is  "+(a+b));
}

// temp(3);

//default parameter function

function add2(a:number,b:number=2.5){
    console.log("Value of A is "+a);
    console.log("Value of B is "+b);
    console.log("Addition is  "+(a+b));
}

// function add2(a:number=7,b?:number){
//     console.log("Value of A is "+a);
//     console.log("Value of B is "+b);
//     console.log("Addition is  "+(a+b));
// }

// add2(4,5);
// add2(6,6)

// add2();