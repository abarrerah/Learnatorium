import {db} from '../db/dbConnector.ts';
import User from '../model/UserModel.ts';
import Role from '../model/RoleModel.ts';


export async function getUser({params,response}:{params:any,response:any}){

    let id=parseInt(params.id);
    
    const userYouWant=await User.where('id',id).role();

    console.log(userYouWant);
    response.body=userYouWant;

}