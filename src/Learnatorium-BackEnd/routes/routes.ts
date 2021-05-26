import { Router } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Register,Login,Me,Logout } from "../controller/loginController.ts";
import * as role from '../controller/RoleController.ts';
import * as theme from '../controller/ThemeController.ts';
import * as category from '../controller/CategoryController.ts';
import * as source from '../controller/SourceController.ts';
import * as chapter from '../controller/ChapterController.ts';
import * as document from '../controller/DocumentController.ts';
import * as user from '../controller/UserController.ts';

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
        .delete('/theme/:id',theme.DeleteTheme)
        .put('/theme/update',theme.UpdateTheme)
        .get('/theme/:id',theme.GetTheme)
        .get('/theme',theme.getAllTheme)

        .post('/category/create',category.CreateCategory)
        .get('/category/all',category.GetAllCategory)
        .get('/category/:id',category.GetCategory)
        .delete('/category/:id',category.DeleteCategory)
        .put('/category/alter',category.AlterCategory)

        .post('/source/create',source.CreateSource)
        .put('/source/validate',source.Validation)
        .patch('/source/update',source.UpdateSource)
        .delete('/source/:id',source.DeleteSource)
        .get('/source/all',source.GetAllSources)
        .get('/source/:id',source.GetSource)

        .post('/chapter/create',chapter.CreateChapter)
        .put('/chapter/update',chapter.UpdateChapter)
        .put('/chapter/update-revision',chapter.UpdateRevision)
        .delete('/chapter/delete/:id',chapter.DeleteChapter)
        .get('/chapter',chapter.getAllChapters)
        .get('/chapter/:id',chapter.GetChapter)

        .post('/document/create',document.CreateDocument)
        .patch('/document/update-category',document.UpdateCategory)
        .patch('/document/update-theme',document.UpdateTheme)
        .patch('/document/update-source',document.UpdateSource)
        .patch('/document/update-chapter',document.UpdateChapter)
        .patch('/document/update-name',document.UpdateName)
        .put('/document/update-summary',document.UpdateSummary)
        .patch('/document/update-content',document.UpdateContent)
        .delete('/document/:id',document.DeleteDocument)
        .get('/documents',document.GetAllDocuments)
        .get('/documentsCat',document.getAllDocsWithCat)
        .get('/document/:id',document.GetDocument)


        .get('/user/:id',user.getUser)
        .get('/users',user.getAllUser)
        .delete('/user/:id',user.deleteUser)
        .patch('/user',user.updateUser)
        
export default router;