import client,{db} from '../db/dbConnector.ts';
import User from '../model/UserModel.ts';

export async function insert(user:any){
    var today = new Date();
    var date= today.getFullYear()+ '-' + today.getMonth()+'-'+today.getDate();

    console.log(user.username,user.email);
     await User.create({
        username:user.username,
        email:user.email,
        password:user.password,
        registration:date,
        bio:user.bio,
        profilePic:user.profilePic,
        ranking:5,
        roleId:1

    });

    return console.log("ok", user);
}

export async function checkLogin(user:any):Promise<Boolean>{
    
    const foundUser= await User.where({username:user.username, password:user.password}).get();
    let isRegistered:boolean=false;

    if(!Array.isArray(foundUser) || !foundUser.length){
        isRegistered=false;

    }else{
        isRegistered=true;
        
    }

    return isRegistered;
}


