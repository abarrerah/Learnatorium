import { Application } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import router from './routes/routes.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {init} from './model/allModel.ts';
import * as appDeps from './env/appDeps.ts';

const app = new Application();

app.use(oakCors({
    credentials: true,
    origin: /^.+localhost:(3000|4200|8080)$/,
}));
app.use(router.routes());

app.use(router.routes());
app.use(router.allowedMethods());


init();

console.log("is Running "+String.fromCodePoint(0x1f525));
await app.listen({ port: appDeps.PORT });