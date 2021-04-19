import {DataTypes,Model,Relationships,} from "https://deno.land/x/denodb/mod.ts";

import User from './User.ts';

export interface RoleI{
    _id:{$oid:string};
    name:string;
    description:string;
}

export default class Role extends Model{
    static table='Role';

    static fields={
        id:{
            type: DataTypes.STRING,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            notNull: true,
            unique: true,
            length: 255,
          },
          description: {
            type: DataTypes.STRING,
            length: 255,
            notNull: true,
          },
    }
    static user(){
        return this.hasMany(User);
    }
}