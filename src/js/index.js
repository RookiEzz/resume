// 引入zepto-modules模块
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');

module.exports = $;


	// $.ajax({
	//   type: 'GET',
	//   url: 'localhost:8888/introduce',
	//   success: function(data) {
	//   	var html = "";
	//   	for (var i = 0; i < data.length; i++) {
	//   		html += "<li>" + data[i].name  +"</li>";
	//   	};
	//   	$(".test").html(html);
	//     console.log(data);
	//   }
	// });
	// console.log("1")
var isPlay = true;
$('.music_icon').on('tap', function(){
	if(isPlay){
		$(this).css("animationPlayState", 'paused');
		$('audio')[0].pause();
		isPlay = false;
	}
	else{
		$(this).css("animationPlayState", 'running');
		$('audio')[0].play();
		isPlay = true;
	}
	
})

// $.ajax({
//   type: 'GET',
//   url: '/api/skill.php',
//   success: function(data) {
//     console.log(data);
//   }
// });
if(localStorage.notFirst){
	$(".swiper-container").hide();
	$("#mainContent").show();
	
}else{
	$(".swiper-container").show();
	$("#mainContent").hide();
}


// 引入swiper模块
var Swiper = require('./components/swiper/swiper.min.js');

var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');


var swiper = new Swiper('.swiper-container',{
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
      },
      onSlideChangeEnd: function(swiper){ 
        swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      } 
});

console.log($.animate)
var IScroll = require('./components/iscroll/iscroll.js');

$('#enter').click(function(){
  $(".swiper-container").hide();
  $("#mainContent").show();
  	localStorage.notFirst = true;
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { return false; }, false);

})
 $.ajax({
  	url:'http://www.renxuanxun.online/resume/php/getsign.php',
	"contentType": "application/x-www-form-urlencoded; charset=utf-8",
  	type:'post',
  	dataType:"json",
  	data:{url:window.location.href},
	success:function(res){
  	console.log(res);
  	wx.config({
    debug: true,
    appId: res.appId,
    timestamp: res.timestamp,
    nonceStr: res.nonceStr,
    signature: res.signature,
    jsApiList: [
      'chooseImage','scanQRCode'
    ]
  });
  }
  })
  
    $('#scan').on('tap', function(){
    wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        alert(result);
    }
    });
  })

   $('#photo').on('tap', function(){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
      }
  });
  })
 

   

$("#footer div").tap(function(){
	var apiTarget = $(this).attr("id");
	var apiUrl = "http://127.0.0.1:8888/" + apiTarget;

	$.ajax({
	  type: 'GET',
	  url: apiUrl,
	  success: function(data) {
	  	var html = "";
	  	
	  	for (var i = 0; i < data.length; i++) {
	  		html += "<li class='Noborder'>"+ data[i].level+""+data[i].category +"：</li><li>" + data[i].name  +"</li>";
	  	};

	  	$("#scroller ul").html(html);
	    console.log(data);
	  }
	});


})