import { DataTypes, Database, Model, MySQLConnector,Relationships} from 'https://deno.land/x/denodb/mod.ts';

import Role from './RoleModel.ts';

export default class User extends Model{
    static table='users';

    static fields ={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:DataTypes.STRING,
            notNull:true,
            length:50
        },
        email:{
            type:DataTypes.STRING,
            notNull:true,
            length:50
        },
        password:{
            type:DataTypes.STRING,
            notNull:true,
            length:150
        },
        registration:{
            type:DataTypes.DATE,
            notNull:true
        },
        bio:{
            type:DataTypes.STRING,
            length:250
        },
        profilePic:{
            type:DataTypes.STRING,
            length:4000,
        },
        ranking:{
            type:DataTypes.INTEGER,
            length:255,
            notNull:true
        },
        roleId:Relationships.belongsTo(Role),
    };

    static role(){
        return this.hasOne(Role);
    }
}
