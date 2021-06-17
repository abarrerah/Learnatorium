import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {User,Role} from '../model/allModel.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { create,verify } from "https://deno.land/x/djwt/mod.ts"

import * as LoginService from "../repository/LoginService.ts";


export const register= async ({request,response}:RouterContext)=>{
    const {name,email,password}= await request.body().value;
    
    response.body = await LoginService.regist(name,email,password);
  
}

export const login=async({request,response,cookies}:RouterContext)=>{
    const {email,password}= await request.body().value;

    const user=await User.where('email',email).get();
    const stringify=JSON.stringify(user);
    const parse=JSON.parse(stringify);
    
    if(stringify.length>2 && await bcrypt.compare(password,parse[0].password)){

        const jwt = await create({ alg: "HS512", typ: "JWT" }, { _id: parse[0].id }, "secret");

        cookies.set('jwt',jwt,{httpOnly:true});
        response.status=200;

        response.body={
            msg:'Success'
        }

    }else if(stringify.length<=2 && !await bcrypt.compare(password,parse[0].password)){
        response.status=404;
        response.body={msg:'User not found'}
    }
}


export const me = async({response,cookies}:RouterContext)=>{
    const jwt= cookies.get('jwt') || '';
    
    if(!jwt){
       response.status=401;
       response.body= {msg:"User not authenticated"};

       return;
    }
    
    const payload = await verify(jwt, "secret", "HS512")   
    if(!payload){
        response.status=401;
        response.body={
            msg:"Unauthenticated",
        }
        return;
    }
    
    let info=payload['_id'] as string;
    let id=parseInt(info);

    response.body=await User.where('id',id).get();
}


export const logout=({response,cookies}:RouterContext)=>{
    cookies.delete('jwt');

    response.body={
        msg: "Success"
    }
}