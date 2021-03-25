export class User
{
    public static allUsers:Array<User> = new Array();
    constructor(public fName:string, public lName:string, public email:string, public pass:string){}

    add(user:User)
    {
        User.allUsers.push(user);
    }
    
}