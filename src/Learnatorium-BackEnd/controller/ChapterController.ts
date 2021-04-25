import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {Chapter} from '../model/allModel.ts';

export const CreateChapter= async ({request,response}:RouterContext)=>{
    const{id,group_name,author}=await request.body().value;
    let last_revision =new Date().toISOString().slice(0, 19).replace('T', ' ');

    const _id=Chapter.create({id,group_name,author,last_revision});
    response.body=Chapter.where('group_name',group_name).get();
}