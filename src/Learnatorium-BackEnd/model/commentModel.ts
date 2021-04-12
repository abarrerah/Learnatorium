import { DataTypes, Model,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import User from './userModel.ts';

export default class Comment extends Model{
    static table='Comment';

    static fields={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        content:{
            type:DataTypes.STRING,
            length:4000,
            notNull:true
        },
        likes:{
            type:DataTypes.INTEGER,
            notNull:true
        },
        userId:Relationships.belongsTo(User),
    };
    static user(){
        return this.hasOne(User);
    }
}