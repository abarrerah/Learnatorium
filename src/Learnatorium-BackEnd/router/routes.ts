import { Router } from "https://deno.land/x/oak/mod.ts";
import {getUser} from "../controller/UserController.ts";

const router= new Router();

    router
        .get("/",(ctx)=>{
            ctx.response.body="My brudda, where is the way?  fsd";
        })
        .get('/user/:id',getUser);



export default router;