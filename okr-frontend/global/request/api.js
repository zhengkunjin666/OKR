const PREFIX = "https://127.0.0.1:3000/api";

export default {
  login: `${PREFIX}/login`,
  todo: `${PREFIX}/todo`,
  todoId: id => `${PREFIX}/todo/${id}`,
  okr: `${PREFIX}/okr`,
  okrId: id => `${PREFIX}/okr/${id}`,
  keyresult: `${PREFIX}/keyresult`,
  keyresultId: id => `${PREFIX}/keyresult/${id}`,
  todo_keyresult: `${PREFIX}/todo_keyresult`,
  todo_keyresultId: id => `${PREFIX}/todo_keyresult/${id}`
}