const Models = require("../models/models");
const Objective = new Models.Objective();
const Keyresult = new Models.Keyresult();
module.exports = {
  index: async function (ctx, next) {
    try {
      const user_id = ctx.state.user_id;
      if (!user_id) {
        ctx.body = { code: 0, data: "没有此用户！" };
        return;
      }
      let data = [];
      const objective = await Objective.select({ user_id, status: 0 });
      for (let i = 0; i < objective.length; i++) {
        const keyresult = await Keyresult.select({
          objective_id: objective[i].id,
        });
        data.push({ objective: objective[i].objective, keyresult: keyresult });
      }
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  insert: async function (ctx, next) {
    const { objective_id } = ctx.request.body;
    const { insertKeyresult } = ctx.request.body;
    if (insertKeyresult == []) {
      return;
    }
    const params = insertKeyresult.map((kr) => {
      return { objective_id, ...kr };
    });
    try {
      const data = await Keyresult.insert(params);
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
  update: async function (ctx, next) {
    try {
      let { status } = ctx.request.body;
      if (typeof status == "number" && status.length != 0) {
        try {
          const id = ctx.params.id;
          let done_at = new Date();
          if (status == 1) {
            status = 0;
            done_at = null;
          } else {
            status = 1;
          }
          const data = await Keyresult.update(id, { status, done_at });
          ctx.body = { code: 200, data: data };
        } catch (error) {
          ctx.body = error;
        }
        return;
      }
      const kr = ctx.request.body;
      if (kr.length == 0) {
        return;
      }
      const data = kr.map(async function (data) {
        const keyresult = data.keyresult;
        if (!keyresult) {
          const id = data.id;
          await Keyresult.delete({ id });
        } else {
          await Keyresult.update(data.id, { keyresult });
        }
      });
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
      const data = await Keyresult.delete({ id });
      ctx.body = { code: 200, data: data };
    } catch (error) {
      ctx.body = error;
    }
  },
};
