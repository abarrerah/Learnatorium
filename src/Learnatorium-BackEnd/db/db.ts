
import {  Database, MySQLConnector} from 'https://deno.land/x/denodb/mod.ts';
import * as bdDeps from '../env/bdDeps.ts';

const connector = new MySQLConnector({
    database: bdDeps.database,
    host: bdDeps.host,
    username: bdDeps.user,
    password: bdDeps.password,
    port: bdDeps.port, 
  });

export const db = new Database(connector);
