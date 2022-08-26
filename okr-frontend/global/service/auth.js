import API from "../request/api";
import request from "../request/request";

export default {
	login(params) {
		return request.post(API.login, params);
	}
};