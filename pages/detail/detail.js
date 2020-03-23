// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      videoInfo:{},
      otherVideoList:{},
      commentData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getVideoInfo(options.id);
      this.getOtherVideo();
      this.getCommentList();
  },
  // 获取视频信息
  getVideoInfo(videoId){
      let that = this;
      wx.request({
        url:"http://mock-api.com/mnEe4VnJ.mock/videoDetail?id="+videoId,
        success(res){
          // console.log(res);
          if(res.data.code === 0){
            that.setData({
              videoInfo:res.data.data.videoInfo
            })
          }
        }
      })
  },
  // 获取推荐信息
  getOtherVideo(){
    let that = this;
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/otherList",
      success(ret){
        // console.log(ret);
        if(ret.data.code === 0){
          that.setData({
            otherVideoList:ret.data.data.otherList
          })
        }
      }
    })
  }, 
  // 评论模块
  getCommentList(){
    let that = this;
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/commentList",
      success(ret){
        console.log(ret);
        if(ret.data.code === 0){
          that.setData({
            commentData:ret.data.data.commentData
          })
        }
      }
    })

  }, 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})