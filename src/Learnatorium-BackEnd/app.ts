import { Application } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import router from './routes/routes.ts';
import User,{UserI} from './model/User.ts';
import Role from './model/Role.ts';
import {db} from './db/db.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

app.use(oakCors({
    credentials: true,
    origin: /^.+localhost:(3000|4200|8080)$/,
}));
app.use(router.routes());

app.use(router.routes());
app.use(router.allowedMethods());


db.link([User]);
db.link([Role]);

// db.sync();

console.log("is Running");
await app.listen({ port: 8000 });