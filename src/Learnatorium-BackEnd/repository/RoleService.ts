import { Role } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const generateRole = async(name:string , description:string) =>{
    const id= await Role.create({name,description});
    return await Role.where('name',name).get();
}