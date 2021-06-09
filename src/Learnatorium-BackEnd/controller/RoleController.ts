import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import * as RoleService from "../repository/RoleService.ts";

export const CreateRole=async ({request,response}:RouterContext)=>{
    const{name,description}=await request.body().value;

    response.body = RoleService.generateRole(name,description);
    response.status = 200;
};

export const AlterRole= async ({request,response}:RouterContext)=>{
    const{id,name,description}=await request.body().value;

    response.body=await RoleService.patchRole(id,name,description);
    response.status = 200;
};


export const DeleteRole= async ({params,response}:RouterContext)=>{
    
    let result: boolean = await RoleService.removeRole(params.id);

    if(result){

        response.body = {msg:"the role have been removed."}
        response.status = 200;
    }else{

        response.body = {msg:"role not found."}
        response.status = 404;
    }
}
export const GetAllRole= async ({response}:RouterContext)=>{
    response.body = await RoleService.showAllRoles();
    response.status = 200;
}

export const getRole= async ({params,response}:RouterContext)=>{

    response.body = await RoleService.showRole(params.id);
    response.status = 200;
}