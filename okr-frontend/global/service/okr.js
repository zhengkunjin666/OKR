import API from "../request/api";
import request from "../request/request";

export default {
	showOkr(params) {
		return request.get(API.okr, params);
	},
	addOkr(params) {
		return request.post(API.okr, params);
	},
	changeOkr(id,params) {
		return request.put(API.okrId(id), params);
	},
	deleteOkr(id) {
		return request.delete(API.okrId(id));
	}
};