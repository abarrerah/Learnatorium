import client, { db } from "../db/dbConnector.ts";
import User from "../model/userModel.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";

export async function insert(user: any) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  console.log(user.username, user.email);

  const salt = await bcrypt.genSalt(8);
  const passwordHashed = await bcrypt.hash(user.password, salt);

  await User.create({
    username: user.username,
    email: user.email,
    password: passwordHashed,
    registration: date,
    bio: user.bio,
    profilePic: user.profilePic,
    ranking: 5,
    roleId: 1,
  });

  return console.log("ok", user);
}

export async function checkLogin(user: any): Promise<Boolean> {
  const foundUser = await User.where({ username: user.username }).get();
  let isRegistered: boolean = false;
  let tSl = "";

  console.log(foundUser);
  
  let result = await JSON.stringify(foundUser);
  if (result.includes(",")) {
    let fSl = result.split(/[,]/)[3];
    let sSl = fSl.split(/[:]/)[1];
    tSl = sSl.replace(/^"(.+(?="$))"$/, "$1");
  }

  const finalR = await bcrypt.compare(user.password, tSl);

  if (!Array.isArray(foundUser) || !foundUser.length || !finalR) {
    isRegistered = false;
  } else {
    isRegistered = true;
  }

  return isRegistered;
}

export async function findUser(id:number){
  
  let isOnDatabases:boolean = false;

  const userExist= await User.where({id: id}).get();

  if(!Array.isArray(userExist) || !userExist.length){
    isOnDatabases=false;
  }else{
    isOnDatabases=true;
  }

  return isOnDatabases;
}

export async function deletedUser(id:number){
  let isOnDatabases:boolean = false;

  await User.deleteById(id);

  const userExist= await User.where({id: id}).get();

  if(!Array.isArray(userExist) || !userExist.length){
    isOnDatabases=false;
  }else{
    isOnDatabases=true;
  }
}