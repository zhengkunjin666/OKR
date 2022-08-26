const Base = require("./base");
const Modules = {
  User: function () {
    class User extends Base {
      constructor(props = "user") {
        super(props);
      }
    }
    User = new User();
    return User;
  },
  Todo: function () {
    class Todo extends Base {
      constructor(props = "todo") {
        super(props);
      }
    }
    Todo = new Todo();
    return Todo;
  },
  Objective: function () {
    class Objective extends Base {
      constructor(props = "objective") {
        super(props);
      }
    }
    Objective = new Objective();
    return Objective;
  },
  Keyresult: function () {
    class Keyresult extends Base {
      constructor(props = "keyresult") {
        super(props);
      }
    }
    Keyresult = new Keyresult();
    return Keyresult;
  },
  Todo_keyresult: function () {
    class Todo_keyresult extends Base {
      constructor(props = "todo_keyresult") {
        super(props);
      }
    }
    Todo_keyresult = new Todo_keyresult();
    return Todo_keyresult;
  },
};
module.exports = Modules;
