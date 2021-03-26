import { Router } from "https://deno.land/x/oak/mod.ts";
import{getUsers,addUser} from "../Controllers/UserController.ts";

const router =new Router();

    router
        .get('/',(ctx)=>{
            ctx.response.body= "Hello World";
        })
        .get('/users',getUsers)
        .post('/user',addUser)


export default router;