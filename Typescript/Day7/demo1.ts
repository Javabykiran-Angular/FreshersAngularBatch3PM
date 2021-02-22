export class MyClass{
  public fname:string;
  private  lname:string;
  protected  id:number;


    constructor(f:string,l:string,id:number){
        this.fname=f,
        this.lname=l;
        this.id=id;        
    }   

    display(){
        console.log(`
          First name :: ${this.fname}
          Last Name ::  ${this.lname}
          ID        :: ${this.id}
        `);
    }
}

// var obj=new MyClass('Sumit','Raokhande',9);
// // var obj=new MyClass();
// obj.display();

export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;

