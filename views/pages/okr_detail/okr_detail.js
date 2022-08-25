// pages/okr_detail/okr_detail.js
import okrService from "../../global/service/okr";
import keyresultService from "../../global/service/keyresult";

Page({
  data: {
    objective: [],
    okr: [],
    show: false,
    btn: [
      { id: null, event: "changeStatus", name: "标记为已完成", status: 0},
      { id: null, event: "deleteObjective", name: "删除"},
      { id: null, event: "hidePage", name: "取消"},
    ]
  },
  objectiveId: null,
  onLoad(option) {
    this.showObjective(option.id);
  },
  showObjective(id) {
    this.objectiveId = id;
    okrService.showOkr({ id }).then(res => {
      const objective = res[0];
      const todo_keyresult = res[2];
      todo_keyresult.forEach(data => {
        if (data.keyresult.status == 1) {
          data.keyresult.active = "active";
        } else {
          data.keyresult.active = "";
        }
        data.okr.forEach(todo => {
          if (todo.status == 1) {
            todo.active = "active";
          }
        })
      })
      this.setData({
        objective: objective,
        okr: todo_keyresult,
      });
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
  },
  hidePage() {
    this.setData({
      show: false,
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
      this.showObjective(id);
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
            wx.switchTab({
              url: "/pages/okr/okr",
              success() {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  mask: true,
                });
              }
            })
          })
        } else if (res.cancel) {
          that.hidePage();
        }
      }
    })
  },
  changeKRStatus(event) {
    const id = event.currentTarget.id;
    const status = event.currentTarget.dataset.status;
    keyresultService.changeKeyresult(id, { status }).then(() => {
      const objectiveId = this.objectiveId;
      this.showObjective(objectiveId);
    })
  }
})