import { Application } from "https://deno.land/x/oak/mod.ts";
import  router  from "./router/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { DataTypes, Model,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import {db} from './db/dbConnector.ts';
import User from './model/userModel.ts';
import Role from './model/roleModel.ts';
import Document from './model/documentModel.ts';
import Comment from './model/commentModel.ts';

const app = new Application();
const PORT = 8000;

app.use(oakCors({
    origin:"*"
}));

app.use(router.routes());
app.use(router.allowedMethods());
// db.link([Role,User]);
// db.link([Document]);
db.link([User])
db.link([Comment]);
db.link([User,Comment]);
// const userHasDocument=Relationships.manyToMany(User,Document);

// db.link([userHasDocument,User,Document]);

await db.sync({drop:true});



await app.listen({port:PORT});