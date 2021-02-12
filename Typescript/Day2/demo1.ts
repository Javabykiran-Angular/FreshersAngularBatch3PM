
//System.out.println("Hello World");
// ''
// console.log("Hello World")
/* */

var a;
var a1;
//Datatypes
// number(int,long,double,folat),string("fgfd","f"),boolean(true & false),any(number,string,boolean),void
//Misec=> null & undefined It use as value 

var b:number=10;  //it is called forward declaration & definitation
var b1:number;
// console.log("Value of b1 is "+b1);
// console.log("Value of b is "+b);

var b2:any;
    b2=2.5;
    console.log("Value of B2 is "+b2);
    b2='Sumit Raokhande';
    console.log("Value of b2 is "+b2);

    //type assertion

    var c:any;

    //U can implement in 2 ways 
    //1 angle bracket
    //2 as syntax

    var temp1= (<string> c);
    
    //2 as syntax
    var temp2=(c as string);
 
    //opreator
    // airthmatic(+,-,*,/,%)
    // logical(&&,||,!=,>=,<=)
    // bitwise(&,|,^,~,!,>>,<<)
    //ternary condition?expressionq1:expression2
    //pre & post =>inc & dec a++,++a,a--,--a
    //

    var temp3=(12<4)?'Hi':'bye';
    console.log("Value of Temp is "+temp3);
