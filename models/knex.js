const configs = require("../config");
const moment = require("moment");
module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.user,
    password: configs.mysql.password,
    database: configs.mysql.database,
    typeCast: function (field, next) {
      if (field.type == "DATETIME") {
        return moment(field.string()).format("YYYY-MM-DD HH:mm:ss");
      }
      return next();
    },
  },
});
