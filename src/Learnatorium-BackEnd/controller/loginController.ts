import { RouterContext } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import  {User} from '../model/allModel.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { create,verify } from "https://deno.land/x/djwt/mod.ts"


export const Register= async ({request,response}:RouterContext)=>{
    const {name,email,password}= await request.body().value;
    let salt=bcrypt.genSalt(10);

    const role=1;
  
    const id= await User.create({name,email,password:await bcrypt.hash(password,await salt),role})
    response.body=await User.where('name',name).get();
}

export const Login=async({request,response,cookies}:RouterContext)=>{
    const {email,password}= await request.body().value;

    const user=await User.where('email',email).get();
    const stringify=JSON.stringify(user);
    const parse=JSON.parse(stringify);
    
    if(stringify.length>2 && await bcrypt.compare(password,parse[0].password)){

        console.log(parse[0].password);
        const jwt = await create({ alg: "HS512", typ: "JWT" }, { _id: parse[0].id }, "secret");

        cookies.set('jwt',jwt,{httpOnly:true});
        response.body={
            msg:'Success'
        }

    }else if(stringify.length<=2 && !await bcrypt.compare(password,parse[0].password)){
        response.status=404;
        response.body={msg:'User not found'}
    }
}


export const Me = async({response,cookies}:RouterContext)=>{
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
            msg:"Unauthencticated",
        }
        return;
    }
    
    let info=payload['_id'] as string;
    let id=parseInt(info);

    response.body=await User.where('id',id).get();
}


export const Logout=({response,cookies}:RouterContext)=>{
    cookies.delete('jwt');

    response.body={
        msg: "Success"
    }
}