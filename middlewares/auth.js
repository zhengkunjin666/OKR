const authCodeFunc = require("../utils/authCode");

module.exports = async function (ctx, next) {
  const token = ctx.headers.authorization;
  if (token) {
    const auth_Code = authCodeFunc(token, "DECODE").str;
    const authArr = auth_Code.split("\t");
    const jikexueyuan = authArr[0];
    const user_id = authArr[2];
    if (jikexueyuan == "jikexueyuan" && user_id) {
      ctx.state.user_id = Number(user_id);
    }
  }
  await next();
};
