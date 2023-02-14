import { UserType } from "./user-type";

export class User {
    id?: number;
    name?: string;
    lastName?: string;
    email?: string;
    userTypeId?: number;
    userType?: UserType;

    constructor(id?: number, name?: string,lastName?:string,email?:string,userTypeId?:number,userType?:UserType){
        this.id = id;
        this.name = name;        
        this.lastName=lastName;
        this.email=email;
        this.userTypeId=userTypeId;
        this.userType=userType;
    }
}
