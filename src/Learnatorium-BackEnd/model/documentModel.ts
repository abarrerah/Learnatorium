import { DataTypes, Model,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import User from './userModel.ts';

export default class Documentation extends Model{
    static table='Document';

    static fields={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        name:{
            type:DataTypes.STRING,
            notNull:true,
            length:250,
            unique:true,
        },
        content:{
            type:DataTypes.STRING,
            notNull:true,
            length:4000,
        },
        creationDate:{
            type:DataTypes.DATE,
            notNull:true,
        },
    };
    static users(){
        return this.hasMany(User);
    }
}