// 1 function without argument & without return type 
// void display(){
    // system.out.print();

// }
// 2 function with argument & without return type

    // void setId(int a){
        // this.id=a;
    // }

// 3 function without argument & with return type

    // int getId(){
    //     return (this.id);
    // }

// 4 function with argument & with return type
        // int area(int b){
        //     res=b*b;
        //     return res;
        // }

        // add(); 

        //Implement First type 
        //function without argument & without return type

        function add(){
            console.log("Addition is "+(2+3));
        }

        // add(); //function call

        // 2 function with argument & without return type

        function add1(a:number,b:number){
            console.log("Addition is "+(a+b));
        }

        // add1(5,5);

        // 3 function without argument & with return type

        function add2(){
            return (6+6);
        }

        // var res=add2();
        // console.log("Result is "+res);
        // console.log("Result is===> "+add2());

        // 4 function with argument & with return type

            function add4(a:number,b:number):number{
                return (a+b);
            }

            console.log("Addition is "+add4(8,8));