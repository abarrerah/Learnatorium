import { Theme } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const generateTheme = async (name: string, style: string) => {
  let regex: RegExp = /.\.css$/;

  if (regex.test(style)) {
    await Theme.create({ themeName: name, style: style });
  }
  return await Theme.where("themeName", name).get();
};

export const removeTheme =async(elementToRemove:any)=>{
    const id= CleanJson.parse(elementToRemove);
    let result:boolean=false;
    const themeFound= await Theme.where("themeId",id).get();

    if(themeFound.toString.length>2){
        await Theme.where("themeId",id).delete();
        result=true;
    }

    return result;
}

export const putTheme=async(id:number,name:string,style:string)=>{
    let regex:RegExp = /.\.css$/;

    if(regex.test(style)){
        await Theme.where('themeId',id).update({name:name,style:style});
    }

    return await Theme.where('themeId',id).get();
}

export const bringTheme = async(element:any)=>{

    const id= CleanJson.parse(element);
    return await Theme.where('themeId',id).get();
}

export const bringAllTheme = async()=>{
    return await Theme.all();
}