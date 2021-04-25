import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {Documents} from '../model/allModel.ts';

export const CreateDocument=async({request,response}:RouterContext)=>{
    const{name,content}= await request.body().value;
    let creation_date =new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    let theme=4;
    let category=1;
    let chapter=1;
    let source=1;
    const _id=await Documents.create({name,content,creation_date,theme,category,chapter,source})
    response.body=Documents.where('name',name).get();
}

export const UpdateName=async({request,response}:RouterContext)=>{

    const{id,name}=await request.body().value;
    response.body=await Documents.where('id',id).update({name})
}
export const UpdateContent=async({request,response}:RouterContext)=>{

    const{id,content}=await request.body().value;
    response.body=await Documents.where('id',id).update({content})
}
export const UpdateTheme=async({request,response}:RouterContext)=>{

    const{id,theme}=await request.body().value;
    response.body=await Documents.where('id',id).update({theme})
}
export const UpdateCategory=async({request,response}:RouterContext)=>{

    const{id,category}=await request.body().value;
    response.body=await Documents.where('id',id).update({category})
}
export const UpdateChapter=async({request,response}:RouterContext)=>{

    const{id,chapter}=await request.body().value;
    response.body=await Documents.where('id',id).update({chapter})
}
export const UpdateSource=async({request,response}:RouterContext)=>{

    const{id,source}=await request.body().value;
    response.body=await Documents.where('id',id).update({source})
}

export const DeleteDocument=async({request,response}:RouterContext)=>{
    const{id}=await request.body().value;
    response.body=await Documents.where('id',id).delete();
}

export const GetAllDocuments=async({response}:RouterContext)=>{
    response.body=await Documents.all();
}

export const GetDocument=async({params,response}:RouterContext)=>{
    let id= JSON.stringify(params.id);
    response.body=Documents.where('id',id).get();
}