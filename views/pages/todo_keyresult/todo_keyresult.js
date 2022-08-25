// pages/todo_keyresult/todo_keyresult.js
import keyresultService from "../../global/service/keyresult";
import todo_keyresultService from "../../global/service/todo_keyresult";

Page({
  data: {
    okr: [],
  },
  tdoo_id: null,
  onLoad(option) {
    this.showPage(option.id);
  },
  showPage(id) {
    this.tdoo_id = id;
    keyresultService.showKeyresult().then(res => {
      this.setData({
        okr: res
      });
      todo_keyresultService.showTodo_keyresult({ id }).then(res => {
        const todo_keyresult = res;
        const okr = this.data.okr;
        okr.forEach(data => {
          data.keyresult.forEach(kr => {
            todo_keyresult.forEach(data => {
              if (data.keyresult_id == kr.id) {
                kr.active = "active";
                kr.okr_id = data.id;
              }
            })
          })
        });
        this.setData({
          okr: okr,
        })
      })
    })
  },
  changeColor(event) {
    const todo_id = this.tdoo_id;
    const keyresult_id = event.currentTarget.id;
    const active = event.currentTarget.dataset.active;
    const okr = this.data.okr;
    const that = this;
    if (!active) {
      okr.forEach(data => {
        data.keyresult.forEach(kr => {
          if (kr.id == keyresult_id && kr.active) {
            kr.active = "";
            const okr_id = kr.okr_id;
            todo_keyresultService.deleteTodo_keyresult(okr_id);
          }
        });
      });
      that.setData({
        okr: okr
      });
      return;
    }
    todo_keyresultService.addTodo_keyresult({ todo_id, keyresult_id }).then((res) => {
      okr.forEach(data => {
        data.keyresult.forEach(kr => {
          if (kr.id == keyresult_id) {
            kr.active = "active";
            kr.okr_id = res[0];
          }
        });
      })
      that.setData({
        okr: okr
      });
    })
  }
})