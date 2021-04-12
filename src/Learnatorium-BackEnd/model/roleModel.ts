import { DataTypes, Model,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import User from './userModel.ts';


export default class Role extends Model{

    static table='Role';
    
    static fields={
        id:{
            type:DataTypes.STRING,
            _primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            notNull:true,
            unique:true,
            length:255
        },
        description:{
            type:DataTypes.STRING,
            length:255,
            notNull:true,
        }
    };

    static users(){
        return this.hasMany(User);
    }
}