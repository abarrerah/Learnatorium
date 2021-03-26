import { Application} from "https://deno.land/x/oak/mod.ts";
import routes from './router/routes.ts';


const app = new Application();
const PORT = 8000;

app.use(routes.routes());
app.use(routes.allowedMethods());

await app.listen({port:PORT});