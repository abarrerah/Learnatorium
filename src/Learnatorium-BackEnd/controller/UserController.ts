import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {User} from '../model/allModel.ts';


export const getUser= async({params,response}:RouterContext)=>{
    const id=JSON.parse(JSON.stringify(params.id));
    response.body= await User.where('id',id).get();
}

export const getAllUser=async({response}:RouterContext)=>{
    response.body=await User.select('id','name','email','role').all();
}