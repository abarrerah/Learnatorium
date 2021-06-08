import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Chapter } from "../model/allModel.ts";
import * as ChapterService from '../repository/ChapterService.ts';

export const CreateChapter = async ({ request, response }: RouterContext) => {
  const { group_name, author } = await request.body().value;
  
  response.status = 201;
  response.body = ChapterService.generateChapter(group_name, author);
};

export const UpdateChapter = async ({ request, response }: RouterContext) => {
  const { id, group_name, author } = await request.body().value;

  response.body = ChapterService.putChapter(id,group_name, author);
  response.status = 200;
};

export const UpdateRevision = async ({ request, response }: RouterContext) => {
  const { id } = await request.body().value;
  response.body = await ChapterService.putRevision(id);
  response.status = 200;
};

export const DeleteChapter = async ({ params, response }: RouterContext) => {
  const result:boolean =await ChapterService.removeChapter(params.id);

  if(result){
    response.status = 200;
    response.body = {msg:" Succesfully deleted"};

  }else{
    response.body = {msg:"User not found"};
    response.status = 404;
  }
}

export const getAllChapters = async ({ response }: RouterContext) => {
  response.body = await ChapterService.showAllChapters();
  response.status = 200;
};

export const GetChapter = async ({ params, response }: RouterContext) => {
  response.body = await ChapterService.showChapter(params.id);
  response.status = 200;
};
