import { Source } from "../model/allModel.ts";
import * as CleanJson from "../libs/CleanJson.ts";

export const generateSource = async (isbn: string) => {
  let creation = new Date().toISOString().slice(0, 19).replace("T", " ");

  let validation = new Date().toISOString().slice(0, 19).replace("T", " ");

  let regexIsbn: RegExp = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
  if (regexIsbn.test(isbn)) {
    await Source.create({ isbn, creation, validation });
  }

  return await Source.where("isbn", isbn).get();
};

export const validationSource = async (id: number, validation: string) => {
  let dt = new Date(validation);
  const valFound = await Source.where("sourceId", id).get();

  if (valFound.toString().length > 2) {
    await Source.where("sourceId", id).update({
      validation: dt.toISOString().slice(0, 19).replace("T", " "),
    });
  }

  return await Source.where("sourceId", id).get();
};

export const patchUser = async (id: number, isbn: string) => {
  let regexIsbn: RegExp = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
  if (regexIsbn.test(isbn)) {
    await Source.where("sourceId", id).update({ isbn });
  }

  return await Source.where("sourceId", id).get();
};

export const removeSource = async (sourceToRemove: any) => {
  let result: boolean = false;
  console.log(sourceToRemove);
  const id = CleanJson.parse(sourceToRemove);

  const sourceFound = await Source.where("sourceId", id).get();

  if (sourceFound.toString().length > 2) {
    await Source.where("sourceId", id).delete();
    result = true;
  }
  return result;
};

export const showAllSource = async () => {
    return await Source.all();
}

export const showSource= async(sourceToFind:any)=>{
    
    const id = CleanJson.parse(sourceToFind);

    return await Source.where('sourceId',id).get();
}