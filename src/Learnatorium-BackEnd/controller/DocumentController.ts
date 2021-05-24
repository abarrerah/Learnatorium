import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import {
  Category,
  Chapter,
  Documents,
  Source,
  Theme,
} from "../model/allModel.ts";

export const CreateDocument = async ({ request, response }: RouterContext) => {
  const { name, content } = await request.body().value;
  let creation_date = new Date().toISOString().slice(0, 19).replace("T", " ");

  let theme = 4;
  let category = 1;
  let chapter = 1;
  let source = 1;
  const _id = await Documents.create({
    name,
    content,
    creation_date,
    theme,
    category,
    chapter,
    source,
  });
  response.body = Documents.where("name", name).get();
};

export const UpdateName = async ({ request, response }: RouterContext) => {
  const { id, name } = await request.body().value;
  response.body = await Documents.where("id", id).update({ name });
};
export const UpdateContent = async ({ request, response }: RouterContext) => {
  const { id, content } = await request.body().value;
  response.body = await Documents.where("id", id).update({ content });
};
export const UpdateTheme = async ({ request, response }: RouterContext) => {
  const { id, theme } = await request.body().value;
  response.body = await Documents.where("id", id).update({ theme });
};
export const UpdateCategory = async ({ request, response }: RouterContext) => {
  const { id, category } = await request.body().value;
  response.body = await Documents.where("id", id).update({ category });
};
export const UpdateChapter = async ({ request, response }: RouterContext) => {
  const { id, chapter } = await request.body().value;
  response.body = await Documents.where("id", id).update({ chapter });
};
export const UpdateSource = async ({ request, response }: RouterContext) => {
  const { id, source } = await request.body().value;
  response.body = await Documents.where("id", id).update({ source });
};

export const DeleteDocument = async ({ params, response }: RouterContext) => {
  const id = JSON.parse(JSON.stringify(params.id));

  const docuFound = await Documents.where("id", id).get();

  if (docuFound.toString().length > 2) {
    await Documents.where("id", id).delete();
    response.status = 200;
  } else {
    response.body = { msg: "Document not found" };
    response.status = 404;
  }
};

export const GetAllDocuments = async ({ response }: RouterContext) => {
  response.body = await Documents.all();
};

export const GetDocument = async ({ params, response }: RouterContext) => {
  const _id = JSON.parse(JSON.stringify(params.id));
  response.body = await Documents.where("id", _id).get();
};

export const getAllDocsWithCat= async ({response}: RouterContext)=>{
  let idDoc= await Documents.all();
  let content;
  let array=[];
  const remember:JSON=<JSON>{}
  let sendContent="";

  for(let i=0;i< idDoc.length;i++) {
    let j=idDoc[i].category;
    content= await Category.where("id",j as any).get();
    array.push(content);
  }
  console.log(typeof array);
  sendContent=JSON.parse(JSON.stringify(array));
  response.body=sendContent;
}