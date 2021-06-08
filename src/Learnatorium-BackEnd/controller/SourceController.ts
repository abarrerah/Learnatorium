import { RouterContext   } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import * as SourceService from '../repository/SourceService.ts';

export const CreateSource = async ({request,response}:RouterContext)=>{

    const{isbn} = await request.body().value;
    response.body = await SourceService.generateSource(isbn);
    response.status = 201;
    
}

export const Validation= async ({request,response}:RouterContext)=>{
    const{validation,id}=await request.body().value;

    response.body = await SourceService.validationSource(id,validation);
    response.status = 200;
}

export const UpdateSource=async ({request,response}:RouterContext)=>{
    const{id,isbn}=await request.body().value;
    
    response.body = await SourceService.patchUser(id,isbn);
    response.status = 200 ;
}

export const DeleteSource=async ({params,response}:RouterContext)=>{
    let result:boolean = await SourceService.removeSource(params.id);
    
    if(result){
        response.body = {msg:"Succesfully deleted"};
        response.status = 200;

    }else{
        response.body = {msg:"Source not found"};
        response.status = 404;
    }

}

export const GetAllSources=async ({response}:RouterContext)=>{

    response.body = SourceService.showAllSource();
    response.status = 200;
}
export const GetSource=async ({params,response}:RouterContext)=>{
    
    response.body = await SourceService.showSource(params.id);
    response.status = 200;
}