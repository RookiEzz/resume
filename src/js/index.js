// 引入zepto-modules模块
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');

module.exports = $;


	$.ajax({
	  type: 'GET',
		dataType:'json',
	  url: "http://www.renxuanxun.online/resume/php/data.php",
		data:{table: "skill_category"},
	  success: function(data) {
			var html = '';
			for(var i = 0; i < data.length; i++){
				html += "<li><img class='myicon' src="+data[i].image+"><div class='myflex'><div class='star_flex'><span class='skill_title'>"+data[i].name+"</span><span>"+data[i].stars+"</span></div><span class='gray'>"+ data[i].content +"</span></div></li>"
			}
			$('#scroller ul').html(html);
	  }
	});

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

	$(".swiper-container").show();
	$("#mainContent").hide();



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
 

   

$("#tb_skill").tap(function(){
	console.log("1")
	$.ajax({
	  type: 'GET',
		dataType:'json',
	  url: "http://www.renxuanxun.online/resume/php/data.php",
		data:{table: "skill_category"},
	  success: function(data) {
			var html = '';
			for(var i = 0; i < data.length; i++){
				html += "<li><img class='myicon' src="+data[i].image+"><div class='myflex'><div class='star_flex'><span class='skill_title'>"+data[i].name+"</span><span>"+data[i].stars+"</span></div><span class='gray'>"+ data[i].content +"</span></div></li>"
			}
			$('#scroller ul').html(html);
	  }
	});
})

$("#work").tap(function(){
	console.log("1")
	$.ajax({
	  type: 'GET',
		dataType:'json',
	  url: "http://www.renxuanxun.online/resume/php/data.php",
		data:{table: "work"},
	  success: function(data) {
			var html = '';
			for(var i = 0; i < data.length; i++){
				html += "<li class='myflex2'><h3>公司名字："+data[i].name+"</h3><span>公司性质："+data[i].categroy+"</span><span>公司规模："+data[i].peoples+"</span><span>在职时间："+data[i].time+"</span><span>职位："+data[i].posts+"</span><span>Report to："+data[i].reportto+"</span><span>做过的项目："+data[i].projects+"</span></li>";
				
			}
			$('#scroller ul').html(html);
	  }
	});
})

$("#project").tap(function(){
	console.log("1")
	$.ajax({
	  type: 'GET',
		dataType:'json',
	  url: "http://www.renxuanxun.online/resume/php/data.php",
		data:{table: "project"},
	  success: function(data) {
			var html = '';
			for(var i = 0; i < data.length; i++){
				html += "<li class='myflex2'><h3>项目名称："+data[i].name+"</h3><span>项目类型："+data[i].category+"</span><span>项目链接："+data[i].url+"</span><span>项目描述："+data[i].description+"</span><span>项目细节："+data[i].detail+"</span><span>技术要点："+data[i].tech+"</li>";
				
			}
			$('#scroller ul').html(html);
	  }
	});
})

$("#introduce").tap(function(){
	console.log("1")
	$.ajax({
	  type: 'GET',
		dataType:'json',
	  url: "http://www.renxuanxun.online/resume/php/data.php",
		data:{table: "myself"},
	  success: function(data) {
			var html = '';
			for(var i = 0; i < data.length; i++){
				html += "<li class='myflex2 gray'><span>姓名："+data[i].myname+"</span><span>出生日期："+data[i].birthday+"</span><span>爱好："+data[i].hobby+"</span><span>工作经验："+data[i].experience+"</span><span>电话号码："+data[i].phone+"</span><span>邮箱："+data[i].email+"</span><span class='noborderBottom'>Github地址："+data[i].github+"</span></li>";
				
			}
			$('#scroller ul').html(html);
	  }
	});
})