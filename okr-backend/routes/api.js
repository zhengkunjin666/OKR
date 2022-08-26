var Koa = require("koa");
var router = require("koa-router")({
  prefix: "/",
});
var userController = require("../controllers/user");
var TodoController = require("../controllers/todo");
var OkrController = require("../controllers/okr");
var KeyresultController = require("../controllers/keyresult");
var Todo_keyresultController = require("../controllers/todo_keyresult");

router.post("api/login", userController.login);

router.get("api/todo", TodoController.index);
router.post("api/todo", TodoController.insert);
router.put("api/todo/:id", TodoController.update);
router.delete("api/todo/:id", TodoController.delete);

router.get("api/okr", OkrController.index);
router.post("api/okr", OkrController.insert);
router.put("api/okr/:id", OkrController.update);
router.delete("api/okr/:id", OkrController.delete);

router.get("api/keyresult", KeyresultController.index);
router.post("api/keyresult", KeyresultController.insert);
router.put("api/keyresult/:id", KeyresultController.update);
router.delete("api/keyresult/:id", KeyresultController.delete);

router.get("api/todo_keyresult", Todo_keyresultController.index);
router.post("api/todo_keyresult", Todo_keyresultController.insert);
router.delete("api/todo_keyresult/:id", Todo_keyresultController.delete);

module.exports = router;
