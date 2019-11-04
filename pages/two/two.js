Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 日期
  bindDateChange(evt) {
    this.setData({ date: evt.detail.value })
  },
  // 获取数据
  dopost(evt){
    console.log(evt.detail.value);
  }

})