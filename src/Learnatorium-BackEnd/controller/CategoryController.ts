import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Category} from '../model/allModel.ts';

export const CreateCategory= async ({request,response}:RouterContext)=>{

    const{id,name}=await request.body().value;
    await Category.create({id:id,name:name});
    response.status=201;
    response.body=Category.where('name',name).get();
}

export const GetAllCategory= async({response}:RouterContext)=> {

    response.status=200;
    response.body= await Category.orderBy('id','asc').all();
}
export const GetCategory=async ({params,response}:RouterContext)=>{

    let idi:number=parseInt(params.id  as string);
    console.log(idi)
    response.status=200;
    response.body=Category.where('id',idi).get();
}

export const DeleteCategory= async ({params,response}:RouterContext)=>{
    const id = JSON.parse(JSON.stringify(params.id));
    response.body=await Category.where('id',id).delete();
}

export const AlterCategory= async ({request,response}:RouterContext)=>{
    const{id,name}=await request.body().value;
    
    let catFound= await Category.where("id",id).get();

    if(catFound.toString().length>2){
        
        await Category.where('id',id).update('name',name);
        response.body={msg:"Updated Category"}
        response.status=200;

    }else{

        response.body={msg:"category not found"}
        response.status=404;
    }

    
}