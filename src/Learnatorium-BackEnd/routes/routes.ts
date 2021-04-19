import { Router } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Register,Login,Me,Logout } from "../controller/loginController.ts";



const router = new Router();

    router.post('/register',Register)
        .post('/login',Login)
        .get('/user',Me)
        .post('/logout',Logout)

export default router;