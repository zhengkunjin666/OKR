const Models = require("../models/models");
const Todo = new Models.Todo();
const Todo_keyresult = new Models.Todo_keyresult();
module.exports = {
  index: async function (ctx, next) {
    const user_id = ctx.state.user_id;
    let status = 0;
    let coloum = "created_at";
    if (ctx.query.status == 1) {
      status = 1;
      coloum = "done_at";
    }
    try {
      const data = await Todo.select({ user_id, status });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  insert: async function (ctx, next) {
    const user_id = ctx.state.user_id;
    const { todo } = ctx.request.body;
    const status = 0;
    const created_at = new Date();
    if (!user_id || !todo) {
      ctx.body = { code: 0, data: "缺少参数！" };
      return;
    }
    try {
      const data = await Todo.insert({ user_id, todo, status, created_at });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  update: async function (ctx, next) {
    const id = ctx.params.id;
    let status = 1;
    let done_at = new Date();
    if (!id) {
      ctx.body = { code: 0, data: "缺少参数！" };
      return;
    }
    if (ctx.request.body.status == 1) {
      status = 0;
      done_at = null;
    }
    try {
      const data = await Todo.update(id, { status, done_at });
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
      const todo_id = id;
      await Todo_keyresult.delete({ todo_id });
      const data = await Todo.delete({ id });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
};
