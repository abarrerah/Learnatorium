import { User } from "../model/allModel.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export const regist = async(name:string,email:string,password:string)=>{

    console.log(name,email,password);
    let salt=bcrypt.genSalt(10);
    const role=3;
    let regexEmail:RegExp=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let regexPasword:RegExp=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

    if(regexEmail.test(email) && regexPasword.test(password)){

        await User.create({name:name,email:email,password:await bcrypt.hash(password,await salt),role:role});
    
    }
    return await User.where('name',name).get();
}
