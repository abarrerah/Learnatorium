import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import * as ThemeService from '../repository/ThemeService.ts';

export const createTheme = async ({request,response}:RouterContext)=>{
    const{name,style}=await request.body().value;
    
    response.body=await ThemeService.generateTheme(name,style);
    response.status=201;
 
}

export const DeleteTheme = async ({params,response}:RouterContext)=>{
    let result:boolean = await ThemeService.removeTheme(params.id);
    if(result){
        response.body={msg:"Succesfully eliminated from our database."};
        response.status=200;
    }else{
        response.body={msg:"Something is wrong, we couldn´t find a theme with that id you provided."};
    response.status=404;
    }
    
}

export const UpdateTheme = async ({request,response}:RouterContext)=>{
    const{id,name,style} = await request.body().value;

    response.body = await ThemeService.putTheme(id,name,style);
    response.status = 200;
}

export const GetTheme= async ({params,response}:RouterContext)=>{

    response.status = 200;
    response.body = await ThemeService.bringTheme(params.id);
}

export const getAllTheme= async ({response}:RouterContext)=>{

    response.body=await ThemeService.bringAllTheme();
    response.status = 200;
}