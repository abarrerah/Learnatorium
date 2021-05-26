import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Category} from '../model/allModel.ts';

export const CreateCategory= async ({request,response}:RouterContext)=>{

    const{id,name,relatedColor}=await request.body().value;
    await Category.create({id:id,name:name,relatedColor:relatedColor});
    response.status=201;
    response.body=Category.where('name',name).get();
}

export const GetAllCategory= async({response}:RouterContext)=> {

    response.status=200;
    response.body= await Category.orderBy('catId','asc').all();
}
export const GetCategory=async ({params,response}:RouterContext)=>{

    let idi:number=parseInt(params.id as string);

    response.status=200;
    response.body=Category.where('catId',idi).get();
}

export const DeleteCategory= async ({params,response}:RouterContext)=>{
    const id = JSON.parse(JSON.stringify(params.id));
    response.body=await Category.where('catId',id).delete();
}

export const AlterCategory= async ({request,response}:RouterContext)=>{
    const{id,name,relatedColor}=await request.body().value;
    
    let catFound= await Category.where("catId",id).get();

    if(catFound.toString().length>2){
        
        await Category.where('catId',id).update({name:name,relatedColor:relatedColor});
        response.body={msg:"Updated Category"}
        response.status=200;

    }else{

        response.body={msg:"category not found"}
        response.status=404;
    }

    
}