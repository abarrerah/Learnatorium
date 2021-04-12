import { DataTypes, Model,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import Role from './roleModel.ts';
import Document from './documentModel.ts';
import Comment from './commentModel.ts';

export default class User extends Model{
    static table='User';

    static fields={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:DataTypes.STRING,
            notNull:true,
            length:50,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            notNull:true,
            length:150,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            notNull:true,
            length:250,
            unique:true
        },
        registration:{
            type:DataTypes.DATE,
            notNull:true,
        },
        bio:{
            type:DataTypes.STRING,
            length:250
        },
        profilePicture:{
            type:DataTypes.STRING,
            length:4000,
        },
        ranking:{
            type:DataTypes.INTEGER,
            length:255,
            notNull:true,
            unique:true,
        },
        // role:Relationships.belongsTo(Role),

    };
    
    // static role(){
    //     return this.hasOne(Role);
    // }
    // static documents(){
    //     return this.hasMany(Document);
    // }
    static Comment(){
        return this.hasMany(Comment);
    }
}