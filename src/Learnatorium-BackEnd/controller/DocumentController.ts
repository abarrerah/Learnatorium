import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";

import * as DocumentService from "../repository/DocumentService.ts";

export const createDocument = async ({ request, response }: RouterContext) => {
  const { name, summary, content } = await request.body().value;
  response.body = await DocumentService.postDocument(name, summary, content);
  response.status = 201;
};

export const updateName = async ({ request, response }: RouterContext) => {
  const { id, name } = await request.body().value;

  response.body = await DocumentService.patchName(id, name);
  response.status = 200;
};

export const updateSummary = async ({ request, response }: RouterContext) => {
  const { id, summary } = await request.body().value;
  response.body = await DocumentService.patchSummary(id, summary);
  response.status = 200;
};

export const updateContent = async ({ request, response }: RouterContext) => {
  const { id, content } = await request.body().value;
  response.body = await DocumentService.patchContent(id, content);
  response.status = 200;
};

export const updateTheme = async ({ request, response }: RouterContext) => {
  const { id, theme } = await request.body().value;
  response.body = await DocumentService.patchTheme(id, theme);
  response.status = 200;
};
export const updateCategory = async ({ request, response }: RouterContext) => {
  const { id, category } = await request.body().value;
  response.body = await DocumentService.patchCategory(id, category);
  response.status = 200;
};
export const updateChapter = async ({ request, response }: RouterContext) => {
  const { id, chapter } = await request.body().value;
  response.body = await DocumentService.patchChapter(id, chapter);
  response.status = 200;
};
export const updateSource = async ({ request, response }: RouterContext) => {
  const { id, source } = await request.body().value;
  response.body = await DocumentService.patchSource(id, source);
};

export const deleteDocument = async ({ params, response }: RouterContext) => {
  let deletedDocument= await DocumentService.deleteDocuments(params.id);

  if (deletedDocument) {
    response.status = 200;
  } else {
    response.body = { msg: "Document not found" };
    response.status = 404;
  }
};

export const getAllDocuments = async ({ response }: RouterContext) => {
  response.body = await DocumentService.allDocuments();
};

export const getDocument = async ({ params, response }: RouterContext) => {
  response.body = await DocumentService.documentWithAllRelations(params.id);
  response.status = 200;
};

export const getAllDocsWithCat = async ({ response }: RouterContext) => {
  response.body= await DocumentService.allDocswithAllRelations();
  response.status = 200;
};
