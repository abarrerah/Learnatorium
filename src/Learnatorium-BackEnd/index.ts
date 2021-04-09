import { Application } from "https://deno.land/x/oak/mod.ts";
import  router  from "./router/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {db} from './db/dbConnector.ts';
import User from './model/UserModel.ts';
import Role from './model/RoleModel.ts';
import document from './model/documentModel.ts';
import theme from './model/themeModel.ts';
import category from './model/categoryModel.ts';

const app = new Application();
const PORT = 8000;

app.use(oakCors({
    origin:"*"
}));

app.use(router.routes());
app.use(router.allowedMethods());

db.link([Role,User]);
db.link([theme,document]);
db.link([category,document]);

//await db.sync({drop: true});



await app.listen({port:PORT});