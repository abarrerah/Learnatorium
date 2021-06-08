import { Category } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const generateCategory = async (catName:string, relatedColor:string) =>{
    await Category.create({catName:catName,relatedColor:relatedColor})
    return await Category.where('catName',catName).get();
}

export const showAllCategory = async () => {
    return await Category.orderBy('catId','asc').all();
}

export const showCategory = async(categoryToFind:any) =>{

    let id = CleanJson.parse(categoryToFind);

    return await Category.where('catId',id).get();
}

export const removeCategory = async(elementToRemove:any) =>{

    let result:boolean = false;

    const id = CleanJson.parse(elementToRemove);

    const catFound = await Category.where('catId',id).get();

    if(catFound.toString().length > 2){
        await Category.where('catId',id).delete();
        result = true;
    }

    return result;
}

export const putCategory = async(id:number,name:string,relatedColor:string)=>{

    let catFound= await Category.where("catId",id).get();

    if(catFound.toString().length>2){
        
        await Category.where('catId',id).update({name:name,relatedColor:relatedColor});

    }

    return await Category.where('catId',id).get();
}