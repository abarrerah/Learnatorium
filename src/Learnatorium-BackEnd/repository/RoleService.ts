import { Role } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const generateRole = async(roleName:string , description:string) =>{
    const id= await Role.create({roleName,description});
    return await Role.where('roleName',roleName).get();
}

export const patchRole = async(id:number,roleName:string,description:string)=>{

    await Role.where('roleId',id).update({roleName,description});

    return await Role.where('roleId',id).get();
}

export const removeRole = async(elementToRemove:any) => {

    let result: boolean = false;
    const id = CleanJson.parse(elementToRemove);
    const roleFound = await Role.where('roleId',id).get();

    if(roleFound.toString().length > 2){
        
        await Role.where('roleId',id).delete();
        result = true;
    }

    return result;
}

export const showAllRoles = async()=>{
    return await Role.all();
}

export const showRole = async(role:any)=>{
    let id = CleanJson.parse(role);
    return await Role.where('roleId',id).get();
}