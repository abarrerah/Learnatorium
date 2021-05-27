import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import {
  Category,
  Chapter,
  Documents,
  Source,
  Theme,
} from "../model/allModel.ts";

export const CreateDocument = async ({ request, response }: RouterContext) => {
  const { name, summary, content } = await request.body().value;
  let creation_date = new Date().toISOString().slice(0, 19).replace("T", " ");

  let theme = 4;
  let category = 1;
  let chapter = 1;
  let source = 1;
  const _id = await Documents.create({
    name,
    summary,
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

export const UpdateSummary = async ({ request, response }: RouterContext) => {
  const { id, summary } = await request.body().value;
  response.body = await Documents.where("id", id).update({ summary });
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
  response.body = await Documents.where("id", _id)
    .join(Category, Category.field("catId"), Documents.field("category"))
    .join(Theme, Theme.field("themeId"), Documents.field("theme"))
    .join(Source, Source.field("sourceId"), Documents.field("source"))
    .join(Chapter, Chapter.field("chapterId"), Documents.field("chapter"))
    .get();
    
  response.status=200;  
};

export const getAllDocsWithCat = async ({ response }: RouterContext) => {
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
  sendContent = JSON.parse(JSON.stringify(newData));
  response.body = sendContent;
  response.status = 200;
};
