import {  Database, MySQLConnector} from 'https://deno.land/x/denodb/mod.ts';

const connector = new MySQLConnector({
    database: 'learnatorium',
    host: '172.17.0.2',
    username: 'root',
    password: '',
    port: 3306, 
  });

export const db = new Database(connector);