const Models = require("../models/models");
const Todo_keyresult = new Models.Todo_keyresult();
module.exports = {
  index: async function (ctx, next) {
    try {
      const todo_id = ctx.query.id;
      const data = await Todo_keyresult.select({ todo_id });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  insert: async function (ctx, next) {
    const { todo_id } = ctx.request.body;
    const { keyresult_id } = ctx.request.body;
    if (!todo_id || !keyresult_id) {
      ctx.body = { code: 0, data: "缺少参数" };
      return;
    }
    try {
      const data = await Todo_keyresult.insert({ todo_id, keyresult_id });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  delete: async function (ctx, next) {
    const id = ctx.params.id;
    if (!id) {
      ctx.body = { code: 0, data: "缺少参数！" };
      return;
    }
    try {
      const data = await Todo_keyresult.delete({ id });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
};
