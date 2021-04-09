import { DataTypes, Database, Model, MySQLConnector,Relationships} from 'https://deno.land/x/denodb/mod.ts';

import category from './categoryModel.ts';
import theme from './themeModel.ts';
import source from './sourceModel.ts';

export default class Document extends Model{
    static table='users';

    static fields={
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        username:{
            type:DataTypes.STRING,
            notNull:true,
            length:50,
            unique:true
        },
        description:{
            type:DataTypes.STRING,
            notNull:true,
            length:4000
        },
        creationDate:{
            type:DataTypes.DATE,
            notNull:true,
        }
        ,
        category:Relationships.belongsTo(category)
    }
    
    static category(){
        return this.hasOne(category)
    }
    static theme(){
        return this.hasOne(theme);
    }
    static source(){
        return this.hasOne(source);
    }
}