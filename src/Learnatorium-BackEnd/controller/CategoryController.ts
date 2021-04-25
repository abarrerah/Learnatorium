import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Category} from '../model/allModel.ts';

export const CreateCategory= async ({request,response}:RouterContext)=>{

    const{name}=await request.body().value;
    await Category.create(name);
    response.status=201;
    response.body=Category.where('name',name).get();
}

export const GetAllCategory= async({response}:RouterContext)=> {

    response.status=200;
    response.body= await Category.select('name').all();
}
export const GetCategory=async ({params,response}:RouterContext)=>{

    let idi:number=parseInt(params.id  as string);
    console.log(idi)
    response.status=200;
    response.body=Category.where('id',idi).get();
}

export const DeleteCategory= async ({request,response}:RouterContext)=>{
    const{name}=await request.body().value;
    response.body=await Category.where('name',name).delete()
}

export const AlterCategory= async ({request,response}:RouterContext)=>{
    const{id,name}=await request.body().value;
    response.body=await Category.where('id',id).update('name',name);
}