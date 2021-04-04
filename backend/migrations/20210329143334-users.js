'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('users', {
    user_id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
    username: { type: 'string', length: 50, notNull: true, unique: true },
    password: { type: 'string', length: 200, notNull: true },
    status: { type: 'string', notNull: true, length: 10, defaultValue: 'active' },
    wallet: { type: 'int', length: 10, unsigned: true, notNull: true, defaultValue: 0 },
  })
};

exports.down = function (db) {
  return db.dropTable('users');
};

exports._meta = {
  version: 1,
};
