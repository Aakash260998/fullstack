export class User{
    public username:any;
    public password:any;
    public name:any;
    public location:any;
    public phone:any;

    constructor(username:string,password:string,name:string,location:string,phone:number){
        this.username=username
        this.password=password
        this.name=name
        this.location=location
        this.phone=phone
    }
}