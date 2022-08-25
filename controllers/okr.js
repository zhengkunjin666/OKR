const Models = require("../models/models");
const Objective = new Models.Objective();
const Keyresult = new Models.Keyresult();
const Todo_keyresult = new Models.Todo_keyresult();
module.exports = {
  index: async function (ctx, next) {
    const user_id = ctx.state.user_id;
    if (!user_id) {
      ctx.body = { code: 0, data: "没有此用户！" };
      return;
    }
    if (ctx.query.id) {
      const id = ctx.query.id;
      try {
        const objective = await Objective.select({ id });
        const keyresult = await Keyresult.select({ objective_id: id });
        const todo_keyresult = [];
        for (let i = 0; i < keyresult.length; i++) {
          const okr = await Todo_keyresult.select({
            keyresult_id: keyresult[i].id,
          }).join("todo", "todo_keyresult.todo_id", "=", "todo.id");
          todo_keyresult.push({ keyresult: keyresult[i], okr: okr });
        }
        const data = [objective, keyresult, todo_keyresult];
        ctx.body = { code: 200, data: data };
      } catch (error) {
        ctx.body = error;
      }
      return;
    }
    try {
      const data = await Objective.select({ user_id });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  insert: async function (ctx, next) {
    const user_id = ctx.state.user_id;
    const { objective } = ctx.request.body;
    const { keyresult } = ctx.request.body;
    const created_at = new Date();
    const status = 0;
    try {
      let objective_id = await Objective.insert({
        user_id,
        objective,
        created_at,
        status,
      });
      objective_id = objective_id[0];
      let keyresult_id;
      if (keyresult.length !== 0) {
        const params = keyresult.map((kr) => ({ objective_id, ...kr }));
        keyresult_id = await Keyresult.insert(params);
      }
      const data = [objective_id, keyresult_id];
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  update: async function (ctx, next) {
    const id = ctx.params.id;
    const { objective } = ctx.request.body;
    const updated_at = new Date();
    if (id && !objective) {
      try {
        let { status } = ctx.request.body;
        let done_at = new Date();
        if (status == 1) {
          status = 0;
          done_at = null;
        } else {
          status = 1;
        }
        const data = await Objective.update(id, { status, done_at });
        ctx.body = { code: 200, data: data };
      } catch (error) {
        ctx.body = error;
      }
      return;
    }
    if (!id || !objective) {
      ctx.body = { code: 0, data: "缺少参数！" };
      return;
    }
    try {
      const data = await Objective.update(id, { objective, updated_at });
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
      const objective = await Objective.delete({ id });
      const keyresult = await Keyresult.delete({ objective_id: id });
      const data = [objective, keyresult];
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
};
