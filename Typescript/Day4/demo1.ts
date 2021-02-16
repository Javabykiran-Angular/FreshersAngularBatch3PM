//anonymous Function
//function does not have any name 

var temp=function (){
    console.log("Function has type 1");
}

// temp();
//4 Function with argument & with return

var temp1=function (a:number,b:number):number{
    return (a+b);
}

//   console.log("Addition is "+ temp1(2,4))

//Fat Arrow Function /Arrow Function

  var temp2=()=>{
        //your code here
        console.log("Function has type 1=======");
    }
    // temp2();

    // with arg. & with return type
   var temp3=(a:number,b:number):number=>{
    return (a+b);
   }
   console.log("Addition is ======= "+temp3(10,2));

   

