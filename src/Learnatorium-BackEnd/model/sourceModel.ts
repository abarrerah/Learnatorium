import { DataTypes, Database, Model, MySQLConnector,Relationships} from 'https://deno.land/x/denodb/mod.ts';

import document from './documentModel.ts';

export default class source extends Model{
    static table='source';

    static fields ={
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
        },
        ISBN:{
            type:DataTypes.STRING,
            length:11,
            unique:true,
            notNull:true
        },
        dateCreation:{
            type:DataTypes.DATE,
            notNull:true,
        },
        dateValidation:{
            type:DataTypes.DATE,
        },
        url: {
            type:DataTypes.STRING,
            length:500,
            notNull:true
        }
    };
    static documents(){
        return this.hasMany(document);
    }
}