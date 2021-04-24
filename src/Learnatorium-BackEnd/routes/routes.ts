import { Router } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Register,Login,Me,Logout } from "../controller/loginController.ts";
import * as role from '../controller/RoleController.ts';
import * as theme from '../controller/ThemeController.ts';
import * as category from '../controller/CategoryController.ts';
const router = new Router();

    router
        .post('/register',Register)
        .post('/login',Login)
        .get('/user',Me)
        .post('/logout',Logout)

        .post('/role/create',role.CreateRole)
        .patch('/role/update',role.AlterRole)
        .patch('/role/update-name',role.AlterNameRole)
        .delete('/role/delete',role.DeleteRole)
        .get('/role',role.GetAllRole)

        .post('/theme/create',theme.CreateTheme)
        .delete('/theme/delete',theme.DeleteTheme)
        .put('/theme/update',theme.UpdateTheme)
        .get('/theme/:id',theme.GetTheme)

        .post('/category/create',category.CreateCategory)
        
export default router;