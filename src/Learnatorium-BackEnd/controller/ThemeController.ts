import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Theme} from '../model/allModel.ts';

export const CreateTheme = async ({request,response}:RouterContext)=>{
    const{name,style}=await request.body().value;
    let regex:RegExp = /.\.css$/;

    if(regex.test(style)){

        await Theme.create({name,style});
        response.body=await Theme.where('name',name).get();

    }else{

        response.body={msg:'Invalid css file'}

    }   
}

export const DeleteTheme = async ({request,response}:RouterContext)=>{
    const{name}=await request.body().value;
    response.body=await Theme.where('name',name).delete();

}

export const UpdateTheme = async ({request,response}:RouterContext)=>{
    const{id,name,style}=await request.body().value;
    let regex:RegExp = /.\.css$/;
    if(regex.test(style)){
        const _id=Theme.where('id',id).update({name:name,style:style})
        response.body={msg:"Succesfully modified"};
    }else{
        response.body={msg:"Wrong style file format"}
    }
}

export const GetTheme= async ({params,response}:RouterContext)=>{
    console.log(params.id)
    const id=JSON.stringify(params.id);
    response.body=Theme.where('id',id).get();
}