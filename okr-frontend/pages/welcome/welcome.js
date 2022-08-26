// pages/welcome/welcome.js
import authService from "../../global/service/auth";

Page({
  onLoad() {
    const token = wx.getStorageSync("token");
    if (token) {
      wx.switchTab({
        url: "/pages/todo/todo"
      })
    }
  },
  login() {
    wx.login({
      success(res) {
        const code = res.code;
        if (code) {
          authService.login({
            code
          }).then(res => {
            wx.setStorage({
              key: "token",
              data: res
            });
            wx.switchTab({
              url: '/pages/todo/todo'
            })
          }).catch((err) => {
            console.log(err);
          })
        }
      },
      fail() {
        wx.showToast({
          title: '网络错误',
          icon: 'error',
          mask: true
        })
      }
    })
  }
})