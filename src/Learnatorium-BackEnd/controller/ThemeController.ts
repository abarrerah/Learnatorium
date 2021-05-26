import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  { Theme} from '../model/allModel.ts';

export const CreateTheme = async ({request,response}:RouterContext)=>{
    const{name,style}=await request.body().value;
    let regex:RegExp = /.\.css$/;

    if(regex.test(style)){

        await Theme.create({name,style});
        response.body=await Theme.where('name',name).get();
        response.status=201;

    }else{

        response.body={msg:'Invalid css file'}

    }   
}

export const DeleteTheme = async ({params,response}:RouterContext)=>{
    const id = JSON.parse(JSON.stringify(params.id));
    const themeFound= await Theme.where("themeId",id).get();
    
    if(themeFound.toString().length>2){
        await Theme.where('themeId',id).delete();
        response.body={msg:"Succesfully eliminated from our database."};
        response.status=200;
    }else{
        response.body={msg:"Something is wrong, we couldn´t find a theme with that id you provided."};
    response.status=404;
    }
    

}

export const UpdateTheme = async ({request,response}:RouterContext)=>{
    const{id,name,style}=await request.body().value;
    console.log(id+""+name+""+style)
    let regex:RegExp = /.\.css$/;
    if(regex.test(style)){
        const _id=Theme.where('themeId',id).update({name:name,style:style})
        response.body={msg:"Succesfully modified"};
    }else{
        response.body={msg:"Wrong style file format"}
    }
}

export const GetTheme= async ({params,response}:RouterContext)=>{
    console.log(params.id)
    const id=JSON.stringify(params.id);
    response.status=200;
    response.body=Theme.where('themeId',id).get();
}

export const getAllTheme= async ({response}:RouterContext)=>{

    response.body=await Theme.all();
}