import { Router } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { register,login,me,logout } from "../controller/LoginController.ts";
import * as role from '../controller/RoleController.ts';
import * as theme from '../controller/ThemeController.ts';
import * as category from '../controller/CategoryController.ts';
import * as source from '../controller/SourceController.ts';
import * as chapter from '../controller/ChapterController.ts';
import * as document from '../controller/DocumentController.ts';
import * as user from '../controller/UserController.ts';

const router = new Router();

    router
        .post('/register',register)
        .post('/login',login)
        .get('/user',me)
        .post('/logout',logout)

        .post('/role/create',role.CreateRole)
        .patch('/role/update',role.AlterRole)
        .delete('/role/:id',role.DeleteRole)
        .get('/role',role.GetAllRole)
        .get('/role/:id',role.getRole)

        .post('/theme/create',theme.createTheme)
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

        .post('/document/create',document.createDocument)
        .patch('/document/update-category',document.updateCategory)
        .patch('/document/update-theme',document.updateTheme)
        .patch('/document/update-source',document.updateSource)
        .patch('/document/update-chapter',document.updateChapter)
        .patch('/document/update-name',document.updateName)
        .put('/document/update-summary',document.updateSummary)
        .patch('/document/update-content',document.updateContent)
        .delete('/document/:id',document.deleteDocument)
        .get('/documents',document.getAllDocuments)
        .get('/documentsCat',document.getAllDocsWithCat)
        .get('/document/:id',document.getDocument)


        .get('/user/:id',user.getUser)
        .get('/users',user.getAllUser)
        .delete('/user/:id',user.deleteUser)
        .patch('/user',user.updateUser)
        
export default router;