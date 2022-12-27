

const Menus = sequalize.define("menus", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
})

const Users = sequalize.define("users", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull    : false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  username         : { type: DataTypes.STRING, allowNull: false, },
  name             : { type: DataTypes.STRING, allowNull: false, },
  sex              : { type: DataTypes.STRING, allowNull: false, },
  email            : { type: DataTypes.STRING, allowNull: false, },
  email_verified_at: { type: DataTypes.STRING, },
  password         : { type: DataTypes.STRING, allowNull: false, },
  deleted_at       : { type: 'TIMESTAMP', },
  deleted_by       : { type: DataTypes.INTEGER, },
})

const Permissions = sequalize.define("permissions", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull: false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  name        : { type: DataTypes.STRING, allowNull: false, },
  display_name: { type: DataTypes.STRING, allowNull: false, },
  description : { type: DataTypes.TEXT, },
  deleted_at  : { type: 'TIMESTAMP', },
  deleted_by  : { type: DataTypes.INTEGER, },
})

const Roles = sequalize.define("roles", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    allowNull    : false,
    primaryKey   : true
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  name        : { type: DataTypes.STRING, allowNull: false, },
  display_name: { type: DataTypes.STRING, allowNull: false, },
  description : { type: DataTypes.TEXT, },
  deleted_at  : { type: 'TIMESTAMP', },
  deleted_by  : { type: DataTypes.INTEGER, },
})

Roles.hasMany(Permissions, { through: 'PermissionRole' })
Permissions.belongsTo(Roles, { through: 'PermissionRole' })


Users.hasMany(Roles, { through: 'UserRole' })
Roles.belongsTo(Users, { through: 'UserRole' })

// const PermissionRole = sequalize.define("permision_role", {
//   id  : {
//     type         : DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey   : true
//   },
//   permission_id: { type: DataTypes.INTEGER, },
//   role_id      : { type: DataTypes.INTEGER, },
// })

// const UserRole =  sequalize.define("user_role", {
//   id  : {
//     type         : DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey   : true
//   },
//   user_id: { type: DataTypes.INTEGER, },
//   role_id: { type: DataTypes.INTEGER, },
// })

const Shapes = sequalize.define("shapes", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull    : false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  name       : { type: DataTypes.STRING, allowNull: false, },
  created_by : { type: DataTypes.INTEGER, allowNull: false, },
  updated_by : { type: DataTypes.INTEGER, allowNull: false, },
  deleted_at : { type: 'TIMESTAMP', },
  deleted_by : { type: DataTypes.INTEGER, },
})

const Types = sequalize.define("types", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull: false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name       : { type: DataTypes.STRING, allowNull: false, },
  created_by : { type: DataTypes.INTEGER, allowNull: false, },
  updated_by : { type: DataTypes.INTEGER, allowNull: false, },
  deleted_at : { type: 'TIMESTAMP', },
  deleted_by : { type: DataTypes.INTEGER, },
})

const Classes = sequalize.define("classes", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name       : { type: DataTypes.STRING, allowNull: false, },
  created_by : { type: DataTypes.INTEGER, allowNull: false, },
  updated_by : { type: DataTypes.INTEGER, allowNull: false, },
  deleted_at : { type: 'TIMESTAMP', },
  deleted_by : { type: DataTypes.INTEGER, },
})

const Drugs = sequalize.define("drugs", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull    : false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  name       : { type: DataTypes.STRING, allowNull: false, },
  shape_id   : { type: DataTypes.INTEGER, allowNull: false, },
  type_id    : { type: DataTypes.INTEGER, allowNull: false, },
  class_id   : { type: DataTypes.INTEGER, allowNull: false, },
  description: { type: DataTypes.TEXT, },
  created_by : { type: DataTypes.INTEGER, allowNull: false, },
  updated_by : { type: DataTypes.INTEGER, allowNull: false, },
  deleted_at : { type: 'TIMESTAMP', },
  deleted_by : { type: DataTypes.INTEGER, },
})

Drugs.hasOne(Shapes, {
  foreignKey: 'shape_id'
});
Shapes.belongsTo(Drugs);

Drugs.hasOne(Types, {
  foreignKey: 'type_id'
});
Types.belongsTo(Drugs);

Drugs.hasOne(Classes, {
  foreignKey: 'class_id'
});
Classes.belongsTo(Drugs);

const Distributors = sequalize.define("distributors", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull    : false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  name          : { type: DataTypes.STRING, allowNull: false, },
  address       : { type: DataTypes.STRING, },
  phone         : { type: DataTypes.STRING, },
  no_license    : { type: DataTypes.STRING, allowNull: false, },
  contact_person: { type: DataTypes.STRING, },
  created_by    : { type: DataTypes.INTEGER, allowNull: false, },
  updated_by    : { type: DataTypes.INTEGER, allowNull: false, },
  deleted_at    : { type: 'TIMESTAMP', },
  deleted_by    : { type: DataTypes.INTEGER, },
})

const Invoices = sequalize.define("invoices", {
  id  : {
    type         : DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey   : true,
    allowNull    : false,
  },
  uid : {
    type        : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull   : false,
  },
  distibutor_id  : { type: DataTypes.INTEGER, allowNull: false, },
  no_invoice     : { type: DataTypes.STRING, allowNull: false, },
  tanggal_invoice: { type: DataTypes.DATEONLY , allowNull: false, },
  tanggal_terima : { type: DataTypes.DATEONLY , allowNull: false, },
  total_invoice  : { type: DataTypes.INTEGER, allowNull: false, },
  banyak_barang  : { type: DataTypes.INTEGER, allowNull: false, },
  jatuh_tempo    : { type: DataTypes.DATEONLY, },
  status         : { type: DataTypes.STRING, allowNull: false, },
  total_bayar    : { type: DataTypes.INTEGER, allowNull: false, },
  created_by     : { type: DataTypes.INTEGER, allowNull: false, },
  updated_by     : { type: DataTypes.INTEGER, allowNull: false, },
  deleted_at     : { type: 'TIMESTAMP', },
  deleted_by     : { type: DataTypes.INTEGER, },
})
