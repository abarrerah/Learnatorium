import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { User } from "../model/allModel.ts";



export const getUser = async ({ params, response }: RouterContext) => {
  const id = JSON.parse(JSON.stringify(params.id));
  response.body = await User.where("id", id).get();
};



export const getAllUser = async ({ response }: RouterContext) => {
  response.body = await User.select("id", "name", "email", "role").all();
};



export const deleteUser = async ({ params, response }: RouterContext) => {
  const id = JSON.parse(JSON.stringify(params.id));

  const userFound= await User.where("id",id).get();

  if(userFound.toString().length>2){

    await User.where("id", id).delete();
    response.body={msg:"Succesfully eliminated from database"};
    response.status=200;

  }else{
    
    response.body={msg:"Something is wrong, we couldn´t find an user with that id you provided."};
    response.status=404;
  }

};



export const updateUser = async ({ request, response }: RouterContext) => {
  const {id, name, email, role } = await request.body().value;
  
  let regexEmail: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (regexEmail.test(email)) {
    if (name !== "" && role !== "") {
        await User.where('id',id).update({email:email,name:name,role:role});
        
    } else if (name === "" && role !== "") {
        await User.where('id',id).update({email:email,role:role});

    } else if (name !== "" && role == "") {
      await User.where('id',id).update({email:email,name:name});

    } else {
      await User.where('id',id).update({email:email});
    }

  }else{
    if (name !== "" && role !== "") {
        await User.where('id',id).update({name:name,role:role});

      } else if (name === "" && role !== "") {
        await User.where('id',id).update({role:role});

      } else if (name !== "" && role === "") {
        await User.where('id',id).update({name:name});
      } 
  }

  response.body= await User.where('id',id).get();
};
