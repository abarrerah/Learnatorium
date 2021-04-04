import {db} from '../db/dbConnector.ts';
import User from '../model/UserModel.ts';



// await Role.create({
//     name:'Admin',
//     description: 'Admin of the system',
// })

 


// await User.update({
//     username:"Abraham",
//     email:"abraham@gmail.com",
//     password:"123456",
//     registration: date,
//     bio:"Mi casa es bonita",
//     profilePic:"Yellow Stone",
//     ranking: 5,
//     roleId:1,
// })


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

export  function checkLogin(user:any){

    const user2=  User.where(User.field('username'),user.username).get();
    

    return user2;

}


