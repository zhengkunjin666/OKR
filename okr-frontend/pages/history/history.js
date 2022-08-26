// pages/history/history.js
import todoService from "../../global/service/todo";

Page({
  data: {
    historyTodo: [],
    show: false,
    btn: [
      { id: null, event: "changeStatus", name: "标记为未完成"},
      { id: null, event: "deleteTodo", name: "删除"},
      { id: null, event: "hidePage", name: "取消"},
    ]
  },
  onLoad() {
    this.showHistoryTodo();
  },
  showHistoryTodo() {
    todoService.showTodo({ status: 1 }).then(res => {
      let historyTodo = res;
      this.setData({
        historyTodo: historyTodo,
      });
    });
  },
  onShow() {
    this.showHistoryTodo();
  },
  showPage(event) {
    let btn = this.data.btn;
    btn.forEach(b => b.id = event.currentTarget.id);
    this.setData({
      show: true,
      btn: btn,
    });
    wx.hideTabBar();
  },
  showTabBar() {
    wx.showTabBar();
  },
  changeStatus(event) {
    const id = event.currentTarget.id;
    todoService.changeTodo(id, { status: 1 }).then(() => {
      wx.showToast({
        title: '标记成功',
        icon: 'success',
        mask: true,
      });
      this.showHistoryTodo();
      this.hidePage();
    });
  },
  hidePage() {
    this.setData({
      show: false,
    });
  },
  deleteTodo(event) {
    const id = event.currentTarget.id;
    const that = this;
    wx.showModal({
      title: "信息提示",
      content: "删除后信息将不可恢复，请确认！",
      showCancel: true,
      success(res) {
        if (res.confirm) {
          todoService.deleteTodo(id).then(() => {
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              mask: true,
            });
            that.showHistoryTodo();
            that.hidePage();
          })
        } else if (res.cancel) {
          that.hidePage();
        }
      }
    })
  }
})