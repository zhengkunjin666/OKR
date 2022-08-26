const JWT = require("jsonwebtoken");
const key = "6YOR5Z2k6ZSm55qET0tS55uu5qCH566h55CG57O757uf";
const authcode = function (str, operation) {
  operation ? operation : "DECODE";
  if (operation == "DECODE") {
    return JWT.verify(str, key);
  } else {
    return JWT.sign({ str }, key, {
      expiresIn: "30d",
    });
  }
};
module.exports = authcode;
