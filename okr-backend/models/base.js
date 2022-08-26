const knex = require("./knex");
class Base {
  constructor(props) {
    this.table = props;
  }
  knex(table) {
    return knex(table);
  }
  all() {
    return knex(this.table).select();
  }
  select(params) {
    return knex(this.table).select().where(params);
  }
  insert(params) {
    return knex(this.table).insert(params);
  }
  update(id, params) {
    return knex(this.table).where("id", "=", id).update(params);
  }
  delete(params) {
    return knex(this.table).where(params).del();
  }
}
module.exports = Base;
