// pages/okr_create/okr_create.js
import okrService from "../../global/service/okr";

Page({
  data: {
    array: [],
  },
  count: 1,
  addKR() {
    let array = this.data.array;
    array.push(this.count++);
    this.setData({
      array: array,
    });
  },
  reduceKR(event) {
    const id = event.currentTarget.id;
    let array = this.data.array;
    let index = array.indexOf(Number(id));
    array.splice(index, 1);
    this.setData({
      array: array,
    });
  },
  formSubmit(event) {
    const okr = event.detail.value;
    const objective = okr.objective.trim();
    delete okr.objective;
    const keyresult = [];
    Object.keys(okr).map((key) => {
      if (okr[key]) {
        const value = okr[key].trim();
        keyresult.push({ "keyresult": value, "status": 0 });
      }
    });
    if (!objective) {
      wx.showToast({
        title: '缺少参数',
      });
      return;
    }
    okrService.addOkr({ objective, keyresult }).then(() => {
      wx.navigateBack({
        delta: 1,
        success() {
          wx.showToast({
            title: '新增成功',
            icon: 'success',
          });
        }
      })
    })
  },
})