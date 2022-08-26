// pages/okr_edit/okr_edit.js
import okrService from "../../global/service/okr";
import keyresultService from "../../global/service/keyresult";

Page({
  data: {
    objective: [],
    array: [],
  },
  count: 1,
  objectiveId: null,
  onLoad(options) {
    this.showOkr(options.id);
  },
  showOkr(id) {
    this.objectiveId = id;
    okrService.showOkr({ id }).then((res) => {
      const objective = res[0];
      let array = res[1];
      array.forEach(kr => kr.kr = this.count++);
      this.setData({
        objective: objective,
        array: array,
      });
    })
  },
  addKR() {
    let array = this.data.array;
    array.push({ "kr": this.count++, "keyresult": null });
    this.setData({
      array: array,
    });
  },
  changeValue(event) {
    const value = event.detail.value;
    const id = event.currentTarget.id;
    let array = this.data.array;
    array.forEach(data => {
      if (data.kr == id) {
        data.keyresult = value;
      }
    })
    this.setData({
      array: array,
    });
  },
  reduceKR(event) {
    const kr = event.currentTarget.dataset.kr;
    let array = this.data.array;
    const that = this;
    if (event.currentTarget.id) {
      const id = event.currentTarget.id;
      wx.showModal({
        title: "信息提示",
        content: "此为已保存过的数据，删除后信息将不可恢复，请确认！",
        showCancel: true,
        success(res) {
          if (res.confirm) {
            keyresultService.deleteKeyresult(id).then(() => {
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                mask: true,
              });
            })
          } else if (res.cancel) {
            const objective_id = that.objectiveId;
            that.showOkr(objective_id);
          }
        }
      })
    }
    array = array.filter(data => data.kr != kr);
    this.setData({
      array: array,
    });
  },
  formSubmit(event) {
    const okr = event.detail.value;
    const objective = okr.objective.trim();
    const keyresult = this.data.array;
    const updateKeyresult = keyresult.filter(data => data.id);
    let insertKeyresult = [];
    keyresult.filter(data => !data.id).map(data => {
      if (data.keyresult) {
        const keyresult = data.keyresult.trim();
        return insertKeyresult.push({ keyresult, "status": 0 });
      }
    });
    if (!objective) {
      wx.showToast({
        title: '缺少参数',
      });
      return;
    }
    const objective_id = this.objectiveId;
    okrService.changeOkr(objective_id, { objective }).then(() => {
      if (updateKeyresult.length != 0) {
        keyresultService.changeKeyresult(objective_id, updateKeyresult);
      }
      if (insertKeyresult.length != 0) {
        keyresultService.addKeyresult({ objective_id, insertKeyresult });
      }
      wx.navigateBack({
        delta: 1,
        success() {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            mask: true,
          });
        }
      });
    })
  },
})