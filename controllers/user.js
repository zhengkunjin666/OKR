const configs = require("../config");
const axios = require("axios");
const Models = require("../models/models");
const User = new Models.User();
const authCodeFunc = require("../utils/authCode");
module.exports = {
  login: async function (ctx, next) {
    const { code } = ctx.request.body;
    if (!code) {
      ctx.body = { code: 0, data: "缺少参数！" };
      return;
    }
    try {
      const appid = configs.appid;
      const secret = configs.secret;
      function getOpenid(appid, secret, code) {
        return axios
          .get(
            `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
          )
          .then((res) => res.data.openid);
      }
      openid = await getOpenid(appid, secret, code);
      const users = await User.select({ openid });
      const user = users[0];
      const created_at = new Date();
      let user_id;
      if (!user) {
        const data = await User.insert({ openid, created_at });
        user_id = data[0];
      } else {
        user_id = user.id;
      }
      const auth_Code = "jikexueyuan" + "\t" + created_at + "\t" + user_id;
      const token = authCodeFunc(auth_Code, "ENCODE");
      ctx.body = { code: 200, data: token };
    } catch (error) {
      ctx.body = error;
    }
  },
};
