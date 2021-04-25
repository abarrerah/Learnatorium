import { RouterContext   } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Source} from '../model/allModel.ts';

export const CreateSource = async ({request,response}:RouterContext)=>{

    const{isbn} =await request.body().value;
    let creation =new Date().toISOString().slice(0, 19).replace('T', ' ');
  
    let validation=new Date().toISOString().slice(0, 19).replace('T', ' ');;

    let regexIsbn:RegExp =/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
    if(regexIsbn.test(isbn)){
        const id=await Source.create({isbn,creation,validation});

        response.body=await Source.where('isbn',isbn).get();
        response.status=200;
    }else{
        response.body={msg:"Incorrect ISBN format"}
        response.status=400;
    }
    
}

export const Validation= async ({request,response}:RouterContext)=>{
    const{validation,id}=await request.body().value;
    let dt=new Date(validation);
    await Source.where('id',id).update({validation:dt.toISOString().slice(0,19).replace('T',' ')})
    response.body=Source.where('id',id).get();
}

export const UpdateSource=async ({request,response}:RouterContext)=>{
    const{id,isbn}=await request.body().value;

    let regexIsbn:RegExp =/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
    if(regexIsbn.test(isbn)){
        await Source.where('id',id).update({isbn})
        response.body=Source.where('id',id).get()
        response.status=200;
    }else{
        response.body={msg:"Invalid ISBN"}
        response.status=400;
    }
}

export const DeleteSource=async ({request,response}:RouterContext)=>{
    const{id}=await request.body().value;
    response.body=await Source.where('id',id).delete();
    
}

export const GetAllSources=async ({response}:RouterContext)=>{

    response.body=await Source.all();
}
export const GetSource=async ({params,response}:RouterContext)=>{
    let id=JSON.stringify(params.id);
    response.body=await Source.where('id',id).get();
}