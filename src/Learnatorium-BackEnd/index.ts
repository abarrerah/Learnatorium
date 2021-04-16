import { Application } from "https://deno.land/x/oak/mod.ts";
import  router  from "./router/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { DataTypes, Model,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import {init} from './model/allModel.ts';
import {PORT} from './env/vars.ts';

const app = new Application();


app.use(oakCors({
    origin:"*"
}));

app.use(router.routes());
app.use(router.allowedMethods());

init();


await app.listen({port:PORT});