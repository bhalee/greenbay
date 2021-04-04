'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('items', {
    item_id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
    owner_id: { type: 'int', notNull: true,
    foreignKey: {
      name: 'fk_items_owner_id_users_user_id',
      table: 'users',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: 'user_id'
    }
   },
    name: { type: 'string', length: 150, notNull: true },
    description: { type: 'string', length: 5000, notNull: true },
    photo_url: { type: 'string', notNull: true, length: 2083, },
    price: { type: 'int', length: 10, unsigned: true, notNull: true, },
    status: { type: 'string', notNull: true, length: 10, defaultValue: 'active' },
  })
};

exports.down = function(db) {
  return db.dropTable('items');
};

exports._meta = {
  "version": 1
};
