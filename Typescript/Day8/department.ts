
export class Department{
    private role:string;

    constructor(r:string){
        this.role=r;

    }

    //setter Method
    setRole(role:string){
        this.role=role;
    }

    //Getter Method
    getRole(){
        return (this.role);
    }


}