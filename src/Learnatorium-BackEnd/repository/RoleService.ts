import { Role } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const generateRole = async(name:string , description:string) =>{
    const id= await Role.create({name,description});
    return await Role.where('name',name).get();
}

export const patchRole = async(id:number,name:string,description:string)=>{

    await Role.where('id',id).update({name,description});

    return await Role.where('id',id).get();
}

export const removeRole = async(elementToRemove:any) => {

    let result: boolean = false;
    const id = CleanJson.parse(elementToRemove);
    
    const roleFound = await Role.where('id',id).get();

    if(roleFound.toString().length > 2){
        await Role.where('id',id).delete();
        result = true;
    }

    return result;
}

export const showAllRoles = async()=>{
    return await Role.all();
}

export const showRole = async(role:any)=>{
    let id = CleanJson.parse(role);
    return await Role.where('id',id).get();
}