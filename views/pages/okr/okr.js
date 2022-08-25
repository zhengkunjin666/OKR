// pages/okr/okr.js
import okrService from "../../global/service/okr";

Page({
  data: {
    objective: [],
    show: false,
    btn: [
      { id: null, event: "toOkrDetail", name: "查看"},
      { id: null, event: "toOkrEdit", name: "编辑"},
      { id: null, event: "changeStatus", name: "标记为已完成", status: 0},
      { id: null, event: "deleteObjective", name: "删除"},
      { id: null, event: "hidePage", name: "取消"},
    ]
  },
  onLoad() {
    this.showObjective();
  },
  showObjective() {
    okrService.showOkr().then(res => {
      let objective = res;
      this.setData({
        objective: objective,
      });
    });
  },
  onShow() {
    this.showObjective();
  },
  toOkrCreate () {
    wx.navigateTo({
      url: '../okr_create/okr_create',
    })
  },
  showPage(event) {
    let btn = this.data.btn;
    const status = event.currentTarget.dataset.status;
    btn.forEach(b => {
      b.id = event.currentTarget.id;
      if (status == 1 && b.name == "标记为已完成") {
        b.name = "标记为未完成";
        b.status = 1;
      } else if (status == 0 && b.name == "标记为未完成") {
        b.name = "标记为已完成";
        b.status = 0;
      }
    });
    this.setData({
      show: true,
      btn: btn,
    });
    wx.hideTabBar();
  },
  showTabBar() {
    wx.showTabBar();
  },
  toOkrDetail(event) {
    this.hidePage();
    this.showTabBar();
    const id = event.currentTarget.id;
    wx.navigateTo({
      url: `../okr_detail/okr_detail?id=${id}`,
    });
  },
  hidePage() {
    this.setData({
      show: false,
    });
  },
  toOkrEdit(event) {
    this.hidePage();
    this.showTabBar();
    const id = event.currentTarget.id;
    wx.navigateTo({
      url: `../okr_edit/okr_edit?id=${id}`,
    });
  },
  changeStatus(event) {
    const id = event.currentTarget.id;
    const status = event.currentTarget.dataset.status;
    okrService.changeOkr(id, { status }).then(() => {
      wx.showToast({
        title: '标记成功',
        icon: 'success',
        mask: true,
      });
      this.showObjective();
      this.hidePage();
    });
  },
  deleteObjective(event) {
    const id = event.currentTarget.id;
    const that = this;
    wx.showModal({
      title: "信息提示",
      content: "删除后信息将不可恢复，请确认！",
      showCancel: true,
      success(res) {
        if (res.confirm) {
          okrService.deleteOkr(id).then(() => {
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              mask: true,
            });
            that.showObjective();
            that.hidePage();
          })
        } else if (res.cancel) {
          that.hidePage();
        }
      }
    })
  }
})