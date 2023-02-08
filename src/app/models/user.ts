import { UserType } from "./user-type";

export class User {
    id?: number;
    name?: string;

    constructor(id?: number, name?: string){
        this.id = id;
        this.name = name;        
    }
}
