import {
  Category,
  Chapter,
  Documents,
  Source,
  Theme,
} from "../model/allModel.ts";

import * as CleanJson from '../libs/CleanJson.ts';


export const patchName = async (id: number, name: string) => {
  return await Documents.where("id", id).update({ name: name });
};

export const patchSummary = async (id: number, summary: string) => {
  return await Documents.where("id", id).update({ summary });
};

export const patchContent = async (id: number, content: string) => {
  return await Documents.where("id", id).update({ content });
};

export const patchTheme = async (id: number, theme: string) => {
  return await Documents.where("id", id).update({ theme });
};

export const patchCategory = async (id: number, category: string) => {
  return await Documents.where("id", id).update({ category });
};

export const patchChapter = async (id: number, chapter: string) => {
  return await Documents.where("id", id).update({ chapter });
};

export const patchSource = async(id:number,source: string) => {
  return await Documents.where("id", id).update({ source });  
}

export const deleteDocuments = async(id:any)=>{
  let deleted:Boolean = false;
  const _id = CleanJson.parse(id);

  const docuFound = await Documents.where("id",_id).get();

  if (docuFound.toString().length > 2) {
    await Documents.where("id", id).delete();
    deleted=true;
  } 

  return deleted;
}

export const allDocuments=async()=>{
  return await Documents.all();
}

export const documentWithAllRelations=async (element:any)=>{
  const id = CleanJson.parse(element);
  return await Documents.where("id", id)
  .join(Category, Category.field("catId"), Documents.field("category"))
  .join(Theme, Theme.field("themeId"), Documents.field("theme"))
  .join(Source, Source.field("sourceId"), Documents.field("source"))
  .join(Chapter, Chapter.field("chapterId"), Documents.field("chapter"))
  .get();
}

export const allDocswithAllRelations=async()=>{
  let idDoc = await Documents.all();
  let content;
  let array = [];
  let sendContent = "";

  for (let i = 0; i < idDoc.length; i++) {
    content = await Documents.where(
      Documents.field("id"),
      idDoc[i].id as number
    )
      .join(Category, Category.field("catId"), Documents.field("category"))
      .join(Theme, Theme.field("themeId"), Documents.field("theme"))
      .join(Source, Source.field("sourceId"), Documents.field("source"))
      .join(Chapter, Chapter.field("chapterId"), Documents.field("chapter"))
      .get();

    array.push(content);
  }
  const newData = array.flat();
  sendContent=CleanJson.parse(newData);

  return sendContent;
}

export const postDocument = async(name:string,summary:string,content:string)=>{

  let creation_date = new Date().toISOString().slice(0, 19).replace("T", " ");

  let theme = 1;
  let category = 1;
  let chapter = 1;
  let source = 1;

  await Documents.create({
    name,
    summary,
    content,
    creation_date,
    theme,
    category,
    chapter,
    source,
  });

  
  return await Documents.where("name",name).get();
}