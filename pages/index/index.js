Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:{},
    currentIndexNav:0,
    swiperList:{},
    videoList:{}
  },
  // 点击导航按钮
  activeNav(e){
    // console.log(123);  
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  // 获取导航栏信息
  getNavList(){
    let that = this
    wx.request({
      url:"https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
      success(res){
        // console.log(res);
        if(res.data.code === 0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  // 获取轮播图
  getSwiperList(){
    let that = this;
    wx.request({
      url:"https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/swiper",
      success(res){
        // console.log(res);
        if(res.data.code === 0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取视频列表
  getVideoList(){
    let that = this;

    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/videoList",
      success(ret){
        // console.log(ret);
        if(ret.data.code ===0){
          that.setData({
            videoList:ret.data.data.videoList
          })
        }

      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
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