import { Chapter } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts"

export const generateChapter = async(group_name:string, author:string)=>{

    let last_revision = new Date().toISOString().slice(0, 19).replace("T", " ");
    return await Chapter.create({ group_name, author, last_revision });
}

export const putChapter= async(id:number, group_name:string, author:string)=>{
    let chapFound = await Chapter.where("chapterId", id).get();

    if (chapFound.toString().length > 2) {
      await Chapter.where("chapterId", id).update({ group_name, author });
    } 
    return await Chapter.where('chapterId', id).get();
}

export const putRevision = async(id:number) => {

    let last_revision = new Date().toISOString().slice(0, 19).replace("T", " ");
    return await Chapter.where("chapterId", id).update({ last_revision });
}

export const removeChapter = async(elementToRemove:any)=>{

    let result: boolean = false;

    const id = CleanJson.parse(elementToRemove);

    const chapterFound = await Chapter.where("chapterId", id).get();

    if(chapterFound.toString().length > 2){
        await Chapter.where("chapterId", id).delete();
        result=true;
    }

    return result;
}

export const showAllChapters = async()=>{
    return await Chapter.all();
}

export const showChapter= async(elementToFind:any) =>{

    let id= CleanJson.parse(elementToFind);
    return await Chapter.where("chapterId",id).get();
}