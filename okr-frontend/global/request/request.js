const interceptorsRequest = (headers) => {
	const token = wx.getStorageSync("token");
	if (token) {
		headers = headers ? headers : {};
		headers["Authorization"] = token;
	}
	return headers;
};
const request = (method, url, data, header) => {
	header = interceptorsRequest(header);
	return new Promise((resolve, reject) => {
		wx.request({
			url: url,
			method: method || "GET",
			data: data || {},
			header: header,
			success(res) {
				if (res.data.code === 200) {
					resolve(res.data.data);
				} else {
					wx.showToast({
						title: res.data.data,
						mask: true,
					});
					reject(res.data.data);
				}
			},
      fail(err) {
        wx.showToast({
          title: '网络错误',
					icon: 'error',
					mask: true,
				});
				reject(err.errMsg);
      }
		})
	})
};

export default {
	post: function(url = "", data = {}, header = {}) {
		return request("POST", url, data, header);
	},
	put: function(url = "", data = {}, header = {}) {
		return request("PUT", url, data, header);
	},
	get: function(url, data = {}, header = {}) {
		return request("GET", url, data, header);
	},
	delete: function(url = "", header = {}) {
		return request("DELETE", url, header);
	},
}