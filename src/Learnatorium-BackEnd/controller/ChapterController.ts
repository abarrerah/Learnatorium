import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Chapter } from "../model/allModel.ts";

export const CreateChapter = async ({ request, response }: RouterContext) => {
  const { group_name, author } = await request.body().value;
  let last_revision = new Date().toISOString().slice(0, 19).replace("T", " ");
  await Chapter.create({ group_name, author, last_revision });
  response.status = 201;
  response.body = { msg: "Succesfully created" };
};

export const UpdateChapter = async ({ request, response }: RouterContext) => {
  const { id, group_name, author } = await request.body().value;

  let chapFound = await Chapter.where("chapterId", id).get();

  if (chapFound.toString().length > 2) {
    await Chapter.where("chapterId", id).update({ group_name, author });
    response.status = 200;
    response.body = await Chapter.where("chapterId", id).get();
  } else {
    response.status = 404;
    response.body = { msg: "Chapter not found" };
  }
};

export const UpdateRevision = async ({ request, response }: RouterContext) => {
  const { id } = await request.body().value;
  let last_revision = new Date().toISOString().slice(0, 19).replace("T", " ");
  await Chapter.where("chapterId", id).update({ last_revision });
  response.body = await Chapter.where("chapterId", id).get();
  response.status = 200;
};

export const DeleteChapter = async ({ params, response }: RouterContext) => {
  const id = JSON.parse(JSON.stringify(params.id));

  console.log(id);
  const chapterFound = await Chapter.where("chapterId", id).get();

  if (chapterFound.toString().length > 2) {

    await Chapter.where("chapterId", id).delete();
    response.body = { msg: "Succesfully Chapter deleted" };
    response.status = 200;

  } else {
    response.body = { msg: "Chapter not found" };
    response.status = 404;
  }
};

export const getAllChapters = async ({ response }: RouterContext) => {
  response.body = await Chapter.all();
};

export const GetChapter = async ({ params, response }: RouterContext) => {
  let id = JSON.stringify(params.id);
  response.body = await Chapter.find(id);
};
