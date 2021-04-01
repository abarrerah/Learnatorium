import { Application } from "https://deno.land/x/oak/mod.ts";
import  router  from "./router/routes.ts";

import {db} from './db/dbConnector.ts';
import User from './model/UserModel.ts';
import Role from './model/RoleModel.ts';

const app = new Application();
const PORT = 8000;

app.use(router.routes());
app.use(router.allowedMethods());

db.link([Role,User]);

//await db.sync({drop: true});


await Role.create({
    name:'Admin',
    description: 'Admin of the system',
})

var today = new Date();

var date= today.getFullYear()+ '-' + today.getMonth()+'-'+today.getDate();


await User.update({
    username:"Abraham",
    email:"abraham@gmail.com",
    password:"123456",
    registration: date,
    bio:"Mi casa es bonita",
    profilePic:"Yellow Stone",
    ranking: 5,
    roleId:1,
})

await User.create({
    username:"Juan",
    email:"abraham@gmail.com",
    password:"123456",
    registration: date,
    bio:"Mi casa es bonita",
    profilePic:"Yellow Stone",
    ranking: 5,
    roleId:1,
})


await User.create({
    username:"LMAO",
    email:"abraham@gmail.com",
    password:"123456",
    registration: date,
    bio:"Mi casa es bonita",
    profilePic:"Yellow Stone",
    ranking: 5,
    roleId:1,
})

await app.listen({port:PORT});