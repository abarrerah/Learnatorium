import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {Role} from '../model/allModel.ts';

export const CreateRole=async ({request,response}:RouterContext)=>{
    const{name,description}=await request.body().value;

    const id= await Role.create({name,description});
    response.body=await Role.where('name',name).get();
};

export const AlterRole= async ({request,response}:RouterContext)=>{
    const{name,description}=await request.body().value;
    const id= await Role.where('name',name).update({description})
    response.body=await Role.where('name',name).get();
};

export const AlterNameRole= async ({request,response}:RouterContext)=>{
    const{id,name}=await request.body().value;
    const _id= await Role.where('id',id).update({name})
    response.body=await Role.where('id',id).get();
}

export const DeleteRole= async ({request,response}:RouterContext)=>{
    const{name,description}=await request.body().value;
    const id=await Role.where({name:name,description:description}).delete();
    response.body={
        msg:'Succesfully deleted'
    }
}
export const GetAllRole= async ({response}:RouterContext)=>{
    response.body=Role.select('name').all();
}