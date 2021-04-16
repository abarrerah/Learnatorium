import {
  DataTypes,
  Model,
  Relationships,
} from "https://deno.land/x/denodb/mod.ts";
import { db } from "../db/dbConnector.ts";

export class Role extends Model {
  static table = "Role";

  static fields = {
    id: {
      type: DataTypes.STRING,
      _primaryKey: true,
      autoIncrement: true,
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
  };

  static users() {
    return this.hasMany(Users);
  }
}

export class Users extends Model {
  static table = "Users";

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      length: 50,
      notNull: true,
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
      length: 150,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      notNull: true,
      length: 250,
      unique: true,
    },
    registration: {
      type: DataTypes.DATE,
      notNull: true,
    },
    bio: {
      type: DataTypes.STRING,
      length: 250,
    },
    profilePicture: {
      type: DataTypes.STRING,
      length: 4000,
    },
    ranking: {
      type: DataTypes.INTEGER,
      length: 255,
      notNull: true,
      unique: true,
    },
    role: Relationships.belongsTo(Role),
  };

  static role() {
    return this.hasOne(Role);
  }

  static documents() {
    return this.hasMany(Documents);
  }
  static users() {
    return this.hasMany(Users);
  }
}
export class Theme extends Model {
  static table = "Theme";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      length: 255,
      notNull: true,
    },
    style: {
      type: DataTypes.STRING,
      unique: true,
      length: 255,
      notNull: true,
    },
  };
  static Documents() {
    return this.hasMany(Documents);
  }
}
export class Category extends Model {
  static table = "Category";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      length: 50,
      notNull: true,
      unique: true,
      allowNull: false,
    },
  };
  static Documents() {
    return this.hasMany(Documents);
  }
}

export class Chapter extends Model {
  static table = "Chapter";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    groupName: {
      type: DataTypes.STRING,
      length: 50,
      notNull: true,
      unique: true,
    },
    Author: {
      type: DataTypes.STRING,
      length: 50,
      allowNull: true,
    },
    lastRevision: {
      type: DataTypes.DATETIME,
      notNull: true,
    },
  };
  static Documents() {
    return this.hasMany(Documents);
  }
}

export class Source extends Model {
  static table = "Source";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ISBN: {
      type: DataTypes.STRING,
      length: 10,
      notNull: true,
      unique: true,
    },
    Creation: {
      type: DataTypes.DATE,
      notNull: true,
    },
    Validation: {
      type: DataTypes.DATE,
    },
  };

  static documents() {
    return this.hasMany(Documents);
  }
}

export class Documents extends Model {
  static table = "Documents";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      notNull: true,
      length: 250,
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
      notNull: true,
      length: 4000,
    },
    creationDate: {
      type: DataTypes.DATE,
      notNull: true,
    },
    theme: Relationships.belongsTo(Theme),
    category: Relationships.belongsTo(Category),
    chapter: Relationships.belongsTo(Chapter),
    Source: Relationships.belongsTo(Source),
  };
  static users() {
    return this.hasMany(Users);
  }
  static theme() {
    return this.hasOne(Theme);
  }
  static category() {
    return this.hasOne(Category);
  }
  static chapter() {
    return this.hasOne(Chapter);
  }
  static source() {
    return this.hasOne(Source);
  }
}

export class Test extends Model {
  static table = "Test";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      length: 50,
      unique: true,
      notNull: true,
    },
    Description: {
      type: DataTypes.STRING,
      length: 4000,
      unique: true,
      notNull: true,
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      notNull: true,
    },
  };
  static optionsTest() {
    return this.hasMany(TestOptions);
  }
  static usersOptions() {
    return this.hasMany(UserOptions);
  }
}
export class TestOptions extends Model {
  static table = "TestOptions";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isRight: {
      type: DataTypes.BOOLEAN,
      notNull: true,
    },
    info: {
      type: DataTypes.STRING,
      notNull: true,
      length: 60,
    },
    testBelongsTo: Relationships.belongsTo(Test),
  };
  static test() {
    return this.hasOne(Test);
  }
  static userOptions() {
    return this.hasMany(UserOptions);
  }
}

export class UserOptions extends Model {
  static table = "UserOptions";
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Answer: {
      type: DataTypes.DATETIME,
      notNull: true,
    },
    points: {
      type: DataTypes.FLOAT,
      notNull: true,
      precision: 2,
    },
    testBelongsTo: Relationships.belongsTo(Test),
    userWhoDidNot: Relationships.belongsTo(Users),
    testOptions: Relationships.belongsTo(TestOptions),
  };
  static users() {
    return this.hasOne(Users);
  }
  static tests() {
    return this.hasOne(Test);
  }
  static testOptions() {
    return this.hasOne(TestOptions);
  }
}

export async function init() {
  // db.link([Users]);
  // db.link([Role]);
  // db.link([Chapter]);
  // db.link([Category])
  // db.link([Source])
  // db.link([Theme]);
  // db.link([Documents]);
  // db.link([Test])
  // db.link([TestOptions])
  // db.link([UserOptions])
  // db.link([Role,Users]);
  // db.link([Theme,Documents]);
  // let userIsSubcribedToUser=Relationships.manyToMany(Users,Users);
  // db.link([userIsSubcribedToUser,Users]);

  await db.sync();
}
