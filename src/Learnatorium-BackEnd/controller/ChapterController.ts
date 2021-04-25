import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {Chapter} from '../model/allModel.ts';

export const CreateChapter= async ({request,response}:RouterContext)=>{
    const{id,group_name,author}=await request.body().value;
    let last_revision =new Date().toISOString().slice(0, 19).replace('T', ' ');

    const _id=Chapter.create({id,group_name,author,last_revision});
    response.body=Chapter.where('group_name',group_name).get();
}

export const UpdateChapter= async ({request,response}:RouterContext)=>{
    const{id,group_name,author}=await request.body().value;
    const _id=await Chapter.where('id',id).update({group_name,author})
    response.body=await Chapter.where('id',id).get();
}

export const UpdateRevision = async ({request,response}:RouterContext)=>{
    const{id}=await request.body().value;
    let last_revision =new Date().toISOString().slice(0, 19).replace('T', ' ');
    const _id=await Chapter.where('id',id).update({last_revision})
    response.body=await Chapter.where('id',id).get();
}

export const DeleteChapter = async ({request,response}:RouterContext)=>{
    const{id}=await request.body().value;
    response.body= await Chapter.where('id',id).delete();

}

export const getAllChapters = async ({response}:RouterContext)=>{

    response.body= Chapter.select('group_name').all();
}

export const GetChapter = async ({params,response}:RouterContext)=>{
    let id=JSON.stringify(params.id);
    response.body=Chapter.find(id);
}