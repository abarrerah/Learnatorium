import { DataTypes, Database, Model, MySQLConnector,Relationships} from 'https://deno.land/x/denodb/mod.ts';
import document from './documentModel.ts';

export default class categorize extends Model{
    static table='category';

    static fields ={
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
            unique:true
        }
    };

    static documents(){
        return this.hasMany(document);
    }
}