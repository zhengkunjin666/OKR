// pages/todo/todo.js
import todoService from "../../global/service/todo";

Page({
  data: {
    todoList: [],
    inputValue: null,
    show: false,
    btn: [
      { id: null, event: "toTodoKeyresult", name: "关联"},
      { id: null, event: "changeStatus", name: "完成"},
      { id: null, event: "deleteTodo", name: "删除"},
      { id: null, event: "hidePage", name: "取消"},
    ]
  },
  onLoad() {
    this.showTodoList();
  },
  showTodoList() {
    todoService.showTodo().then(res => {
      let todoList = res;
      this.setData({
        todoList: todoList,
      });
    });
  },
  onShow() {
    this.showTodoList();
  },
  addTodo(event) {
    const todo = event.detail.value;
    todoService.addTodo({ todo }).then(() => {
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        mask: true,
      });
      this.setData({
        inputValue: null
      });
      this.showTodoList();
    });
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
  hidePage() {
    this.setData({
      show: false,
    });
  },
  toTodoKeyresult(event) {
    const id = event.currentTarget.id;
    this.hidePage();
    this.showTabBar();
    wx.navigateTo({
      url: `../todo_keyresult/todo_keyresult?id=${id}`,
    });
  },
  changeStatus(event) {
    const id = event.currentTarget.id;
    todoService.changeTodo(id).then(() => {
      wx.showToast({
        title: '标记成功',
        icon: 'success',
        mask: true,
      });
      this.showTodoList();
      this.hidePage();
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
            that.showTodoList();
            that.hidePage();
          })
        } else if (res.cancel) {
          that.hidePage();
        }
      }
    })
  }
})