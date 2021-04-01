import { DataTypes, Database, Model, MySQLConnector,Relationships} from 'https://deno.land/x/denodb/mod.ts';

import User from './UserModel.ts';

export default class Role extends Model{
    static table='Role';

    static fields = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            notNull:true
        },
        description:{
            type:DataTypes.STRING,
            length:250,
            notNull:true
        }
    };
    static users(){
        return this.hasMany(User);
    }
}