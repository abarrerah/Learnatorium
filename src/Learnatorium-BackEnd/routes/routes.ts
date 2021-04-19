import { Router } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Register,Login,Me,Logout } from "../controller/loginController.ts";



const router = new Router();

    router.post('/api/register',Register)
        .post('/api/login',Login)
        .get('/api/user',Me)
        .post('/api/logout',Logout)

export default router;