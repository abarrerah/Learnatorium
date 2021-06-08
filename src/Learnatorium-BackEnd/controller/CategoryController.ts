import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import * as CategoryService from "../repository/CategoryService.ts";

export const CreateCategory= async ({request,response}:RouterContext)=>{

    const{catName,relatedColor}=await request.body().value;
   
    response.status=201;
    response.body= await CategoryService.generateCategory(catName,relatedColor);
}

export const GetAllCategory= async({response}:RouterContext)=> {

    response.status=200;
    response.body= await CategoryService.showAllCategory();
}
export const GetCategory=async ({params,response}:RouterContext)=>{

    response.status=200;
    response.body= await CategoryService.showCategory(params.id);
}

export const DeleteCategory= async ({params,response}:RouterContext)=>{
    const result: boolean = await CategoryService.removeCategory(params.id);

    if(result){
        response.status = 200;
        response.body = {msg: "Category removed"};
    }else{
        response.status=200;
        response.body = {msg: "Category not found"};
    }
    
}

export const AlterCategory= async ({request,response}:RouterContext)=>{
    const{id,name,relatedColor}=await request.body().value;
    
    response.status = 200;
    response.body = await CategoryService.putCategory(id,name,relatedColor);
    
}