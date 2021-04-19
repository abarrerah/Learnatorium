
import { Model,DataTypes,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import Role from './Role.ts';

export interface UserI{
    _id:{$oid:string};
    name:string;
    email:string;
    password:string;
}

export default class User extends Model{
    static table='User';
    static fields={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            length:250,
            notNull:true,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            length:250,
            notNull:true,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            length:250,
            notNull:true,
            unique:true
        },
        role:Relationships.belongsTo(Role)

    }

    static role(){
        return this.hasOne(Role);
    }
}