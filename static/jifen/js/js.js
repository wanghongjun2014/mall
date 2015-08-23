// JavaScript Document
$(function() {
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var sHeight = $("#focus ul li img").height();
	var index = 0;
	var picTimer;
	$("#focus").height(sHeight+"px");
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",1);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",1).mouseover(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");


	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},3000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true,false).animate({"opacity":"1"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}
});

$(document).ready(function() {
    $(".top ul.tsec li.nth").click(function(){
		$(this).find("ul").slideToggle();	
		});
	$(".top ul.tsec li.nth ul li a").click(function(){
		var tText=$(this).html();
		$(this).parent().parent().parent().find("a.ts").html(tText);	
		});
	
	$(".zuoleft .nav-left dd").hover(function(){
		$(this).find("div").show();
		$(this).find("span").hide();		
		});
	$(".zuoleft .nav-left dd").mouseleave(function(){
		$(this).find("div").hide();
		$(this).find("span").show();			
		});
	$(".youright .sec2 span").click(function(){
		$(this).find("ul").slideToggle();	
		});
	$(".youright .sec2 span ul li").click(function(){
		var mtxt=$(this).html();
		$(this).parent().parent().find("input.bu").val(mtxt);	
		});
	$("ul.hang li").hover(function(){
		$(this).find("div").show();
		$(this).find("span").hide();	
		});
	$("ul.hang li").mouseleave(function(){
		$(this).find("div").hide();
		$(this).find("span").show();	
		});
	$(".yfanye ul li").click(function(){
		$(this).parent().find("li").css("border","1px solid #c9c9c9");
		$(this).css("border","1px solid #ffffff");	
		});
	$(".zxin ul li").click(function(){
		$(this).parent().find("li").removeClass("dthis");	
		$(this).addClass("dthis");
		});
	$(".shoumi dl.ddl dd span ul li").click(function(){
		var st=$(this).html();
		$(this).parent().parent().find("input").val(st);	
		});
	$(".shoumi dl.ddl dd span div").click(function(){
		$(this).find("ul").slideToggle();	
		});
	$(".shoumi dl.ddl dd.moren a").click(function(){
		$(this).find("i").toggle();	
		});
	$(".shai span").click(function(){
		$(this).parent().find("span").removeClass("ddthis");
		$(this).addClass("ddthis");	
		});
	$("ul.myed li:nth-child(3) span").click(function(){
		$(this).parent().find("span").removeClass("cthis");
		$(this).addClass("cthis");
		});
	$("ul.pingjia li div.r span").click(function(){
		$(this).parent().find("span").removeClass("jthis");
		$(this).addClass("jthis");	
		});
		
	$(".geren li div ul li").click(function(){
		var st=$(this).html();
		$(this).parent().parent().find("input").val(st);	
		});
	$(".geren li div").click(function(){
		$(this).find("ul").slideToggle();	
		});
	$(".chazuo div span").click(function(){
		$(this).find("i").toggle();
		
		});
	$(".chazuo table span").click(function(){
	
				
		});
});



$(document).ready(function(){
	//focusblur
	jQuery.focusblur = function(focusid) {
		var focusblurid = $(focusid);
		var defval = focusblurid.val();
		focusblurid.focus(function(){
			var thisval = $(this).val();
			if(thisval==defval){
				$(this).val("");		
			}
		});
		focusblurid.blur(function(){
			var thisval = $(this).val();
			if(thisval==""){
				$(this).val(defval);	
			}
		});
		
	};
	/*下面是调用方法*/
	$.focusblur("#name");
});

function isNull( str ){ 
if ( str == "" ) return true; 
var regu = "^[ ]+$"; 
var re = new RegExp(regu); 
return re.test(str); 
} 
function checkEmail(strEmail) { 
//var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/; 
var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/; 
if( emailReg.test(strEmail) ){ 
return false; 
}else{ 
return true; 
} 
}

function checkPhone( strPhone ) { 
var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/; 
var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/; 
if( strPhone.length > 9 ) { 
if( phoneRegWithArea.test(strPhone) ){ 
return false; 
}else{ 
return true; 
} 
}else{ 
if( phoneRegNoArea.test( strPhone ) ){ 
return false; 
}else{ 
return true; 
} 

  
} 
} 

 
function cp(){
	var name=document.getElementById("name").value;
	var upwd=document.getElementById("upwd").value;
	var yma=document.getElementById("yma").value;
	if(isNull(name)){
		alert("用户名不能为空！");	
		}else if(isNull(upwd)){
			alert("密码不能为空！");	
			}else if(isNull(yma)){
			alert("验证码不能为空！");	
			}else{
				alert("恭喜您！登录成功！");	
				}
	}

function tj(){
	var yname=document.getElementById("yname").value;
	var ypwd=document.getElementById("ypwd").value;
	var yfpwd=document.getElementById("yfpwd").value;
	var yemail=document.getElementById("yemail").value;
	var yphone=document.getElementById("yphone").value;
	if(isNull(yname)){
		alert("用户名不能为空！");	
		}else if(isNull(ypwd)){
			alert("密码不能为空！");	
			}else if(yfpwd!=ypwd){
				alert("两次输入的密码不一致，请重新输入");	
				}else if(isNull(yemail)||checkEmail(yemail)){
					alert("您输入的Email地址格式不正确！"); 	
					}else if(checkPhone(yphone)||isNull(yphone)){
						alert("您输入的电话格式不正确请重新输入！");	
						}else if(document.getElementById("xieyi").checked){
							alert("恭喜您！注册成功！");		
							}else{
								alert("您并未同意本网站的注册协议，请同意后再注册！");	
								}
	}


$(document).ready(function() {
				$("#jian").click(function(){
					var s=parseInt($("#shul").val());
					if(s>1){
						s--;
						$("#shul").val(s);							
						}else{
							$("#shul").val(1);	
							}
					});
				$("#jia").click(function(){
					var s=parseInt($("#shul").val());
					if(s>=1){
						s++;
						$("#shul").val((s));	
						}
					});
            });





























