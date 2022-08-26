import API from "../request/api";
import request from "../request/request";

export default {
	showKeyresult(params) {
		return request.get(API.keyresult, params);
	},
	addKeyresult(params) {
		return request.post(API.keyresult, params);
	},
	changeKeyresult(id,params) {
		return request.put(API.keyresultId(id), params);
	},
	deleteKeyresult(id) {
		return request.delete(API.keyresultId(id));
	}
};