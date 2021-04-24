import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Category} from '../model/allModel.ts';

export const CreateCategory= async ({request,response}:RouterContext)=>{

    const{id,name}=await request.body().value;
    console.log(id,name)
    const _id=await Category.create({id,name});
    response.body=await Category.where('name',name).get();
}