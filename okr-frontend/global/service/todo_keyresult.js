import API from "../request/api";
import request from "../request/request";

export default {
	showTodo_keyresult(params) {
		return request.get(API.todo_keyresult, params);
	},
	addTodo_keyresult(params) {
		return request.post(API.todo_keyresult, params);
	},
	deleteTodo_keyresult(id) {
		return request.delete(API.todo_keyresultId(id));
	}
};