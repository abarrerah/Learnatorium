import { Router } from "https://deno.land/x/oak/mod.ts";
import * as userController from "../controller/UserController.ts";

const router= new Router();

    router
        
        .get('/user/:id',userController.getUser)
        .post('/regist',userController.addUser)
        .post('/login',userController.doLogin)


export default router;