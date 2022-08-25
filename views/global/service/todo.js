import API from "../request/api";
import request from "../request/request";

export default {
	showTodo(params) {
		return request.get(API.todo, params);
	},
	addTodo(params) {
		return request.post(API.todo, params);
	},
	changeTodo(id,params) {
		return request.put(API.todoId(id), params);
	},
	deleteTodo(id) {
		return request.delete(API.todoId(id));
	}
};