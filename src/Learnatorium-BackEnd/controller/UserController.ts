import User from '../model/UserModel.ts';
import Role from '../model/RoleModel.ts';
import {insert,checkLogin} from '../repository/UserRepository.ts';
//import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export async function getUser({params,response}:{params:any,response:any}){

    let id=parseInt(params.id);
    
    const userYouWant=await User.find(id);

    var count = Object.keys(userYouWant)
    ;
    console.log(count);

    if(count.length>0){
        response.body=200;
        response.body=userYouWant;
    }else{
        response.body=404;
        response.body= {msg : "Error, not user found"};
    }
    

}

export async function addUser({request,response}:{request:any,response:any}){

    const body= await request.body();
    const user:User = await body.value;

    console.log(user);
    if(user.hasOwnProperty("username")&& user.hasOwnProperty("email")){
        response.body=201;
        console.log(user);
        
        insert(user);
        
    }else{
        response.body=400;
        response.body={msg : "Invalid request"}
    }
}

export async function doLogin({request,response}:{request:any,response:any}){
    const body = await request.body();
    const user:User = await body.value;
    const data =  checkLogin(user);
    
    data.then(res=>{
        return res;
    })
  
    const gettingObjectFromPromise= async ()=>{
        return await data;
    }
    if(await gettingObjectFromPromise()==true){
        response.status=200;
        response.body = await gettingObjectFromPromise();
        
    }else{
        response.status=400;
        response.body={msg:"Error, user not found"}
    }
}