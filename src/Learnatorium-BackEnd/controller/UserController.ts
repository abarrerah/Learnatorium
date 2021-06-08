import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import * as UserService from "../repository/UserService.ts";

export const getUser = async ({ params, response }: RouterContext) => {
  response.body = await UserService.retrieveUser(params.id);
  response.status = 200;
};

export const getAllUser = async ({ response }: RouterContext) => {
  response.body =  await UserService.retrieveAllUsers();
  response.status = 200;
};

export const deleteUser = async ({ params, response }: RouterContext) => {
  let result:boolean =await UserService.removeUser(params.id);
  if(result){
    response.body={msg:"Succesfully eliminated from database"};
    response.status=200;

  }else{
    response.body={msg:"Something is wrong, we couldn´t find an user with that id you provided."};
    response.status=404;
  }

};

export const updateUser = async ({ request, response }: RouterContext) => {
  const {id, name, email, role } = await request.body().value;
  

  response.body= await UserService.patchUser(id,name,email,role);
  response.status= 200;
};
