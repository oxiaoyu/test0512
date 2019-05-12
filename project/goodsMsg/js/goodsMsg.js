
onload = function () {
 //init
 ;(function(){
   class Init{
     constructor(){
      this.id = getCookie('open');
      this.init();
     }
     init(){
      this.get();
      $('.add .addCar').click(function(){
        let id = JSON.parse(getCookie('open'));
        let goods = getCookie('goods');
        if(goods){
       goods =  JSON.parse(goods);
       goods.forEach((v,index)=>{
          if(v.id == id ){
           goods[index].num++;
          }
       });
        }else{
       goods =    [{id:id,num:1}]; 
      }
     setCookie('goods',JSON.stringify(goods),{
       path:'/project'
     });
     console.log(goods)
     });
    }
     get(){
      let that = this;
       let xhr = new XMLHttpRequest();
       xhr.open('get',"http://localhost/project/data/data.json")
       xhr.onreadystatechange = function(){
         if(xhr.readyState == 4 && xhr.status == 200){
           that.res =  JSON.parse(xhr.responseText);
            that.res = that.res.phone; 
           that.res.forEach((v,index)=>{
              if(v.id == that.id){
                that.data = v;
                that.display();
              }
           })
         }
     }
     xhr.send(null);
    }
    display(){

     $('.pic img').get(0).src =this.data.src ;
     $('h5').html(this.data.introduce.slice(5));
      $('.txt').html(this.data.introduce);
      $('.Price span').html(this.data.Price);
      $('.b_box img').get(0).src = this.data.bigimg;
    }
   }
      new Init;
 })();
  //header
  ; (function () {
    $('header').find('.car').hover(function () {
      $("header").find('.car-list').css('display', 'block').stop().animate({
        top: 50,
        opacity: 1
      }, 200);
    }, function () {
      $("header").find('.car-list').css('display', "none").stop().animate({
        top: 35,
        opacity: 0
      }, 200);
    })
  })();


  //nav
  ; (function () {
    let data = {
      commodity: [{ class: "icon-jiaju", name: "家居", data: ["家具", "日常家用","装饰摆件","空气净化","收纳整理","儿童家具","灯具"]}, { class: "icon-wenju", name: "文具" , data: ["文具", "文具","文具","文具","文具","文具","文具"]}, { class: "icon-shuma", name: "数码", data: ["数码", "数码","数码","数码","数码","数码","数码"] }, { class: "icon-wanle", name: "玩乐", data: ["玩乐", "玩乐","玩乐","玩乐","玩乐","玩乐","玩乐"] }, { class: "icon-canju", name: "餐厨", data: ["餐厨", "餐厨","餐厨","餐厨","餐厨","餐厨","餐厨"] }, { class: "icon-meishi", name: "美食", data: ["美食", "美食","美食","美食","美食","美食","美食"] }, { class: "icon-fuzhuang", name: "服装" , data: ["服装", "服装","服装","服装","服装","服装","服装"]}, { class: "icon-xiebao", name: "鞋包", data: ["鞋包", "鞋包","鞋包","鞋包","鞋包","鞋包","鞋包"] }, { class: "icon-peishi", name: "配饰" , data: ["配饰", "配饰","配饰","配饰","配饰","配饰","配饰"]}, { class: "icon-meihu", name: "美护", data: ["美护", "美护","美护","美护","美护","美护","美护"] }, { class: "icon-chuxing", name: "出行", data: ["出行", "出行","出行","出行","出行","出行","出行"] }, { class: "icon-book", name: "图书" , data: ["图书", "图书","图书","图书","图书","图书","图书"]}, { class: "icon-yishu", name: "艺术", data: ["艺术", "艺术","艺术","艺术","艺术","艺术","艺术"]}, { class: "icon-shuiju", name: "水具", data: ["水具", "水具","水具","水具","水具","水具","水具"] }],
      Magazine: ["趣物", "数码", "汽车", "文化", "时尚", "美食", "建筑", "空间", "圈子", "清单", "活动", "视频"],
      share: ["男士", "家居", "数码", "工具", "玩具", "美容", "孩子", "宠物", "饮食", "运动", "文化"]
    };
    let arrData = [];

    let index = 0;
    for (let i in data) {
      let str = '';
      for (let j = 0; j < data[i].length; j++) {
        typeof data[i][j]
        if (typeof data[i][j] == 'object') {
          str += `<dd> <i class="${data[i][j].class}"></i> ${data[i][j].name}</dd>`;
        } else {
          str += `<dd>${data[i][j]}</dd>`;
        }
      }
      arrData.push(str);
    }
    for (let i = 1; i < 4; i++) {
      var h = 0;
      $('nav').find('li').eq(i).hover(function () {
        index = $(this).index();
        if (index != 1) {
          $('dl').removeClass('p-num');
          h = 200;
          $('nav').find('dl').css('width', 900);
        } else {
          $('dl').addClass('p-num');
          h = 350;
          $('nav').find('dl').css('width', 680);
        }
        $('nav').children('.Submenu').find('.box').children('dl').html(arrData[i - 1]);
        $('nav').children('.Submenu').find('.box')
          .stop().animate({ height: h })
          .parent().css('borderBottom', '1px solid #ccc');
      }, function () {
        $('nav').children('.Submenu').find('.box')
          .stop().animate({ height: 0 }, function () {
            $('nav').children('.Submenu').find('.box').children('dl').html('');
          })
          .parent().css('borderBottom', 0);
      });
      $('nav').children('.Submenu').find('.box').hover(function () {
        $('nav').find('a').eq(index).addClass('active').parent().siblings().children('a').removeClass('active');
        $(this).stop().animate({ height: h })
          .parent().css('borderBottom', '1px solid #ccc');
      }, function () {
        index = 0;
        $('nav').find('a').removeClass('active');
        $('nav').children('.Submenu').find('.box').children('dl').html('');
        $(this).stop().animate({ height: 0 })
          .parent().css('borderBottom', 0);
      });
    }
   $('.Submenu').find('dl').on('mouseenter','dd',function(){
     console.log(this.parentNode.className)
     if(this.tagName =='DD' && this.parentNode.className == 'd-flex flex-wrap p-num'){
       let str = '';
      // console.log($(this).index())
      // console.log(data.commodity[$(this).index()].data)
      for(let i = 0;i<data.commodity[$(this).index()].data.length;i++){
        str += `<a>${data.commodity[$(this).index()].data[i]}</a>`;
      }
      $p= $('<p class="d-flex justify-content-between"></p>');
      $p.css('height',0);
      $(this).append($p.html(str));
      $(this).children('p').stop().animate({height:40});
     }
   });
   $('.Submenu').find('dl').on('mouseleave','dd,p a',function(){
    if(this.tagName =='DD'){
      $(this).css('background','');
      $(this).children('p').stop().animate({height:0},function(){
        $(this).remove();
      });
    }
  });
   $(".Submenu").find('dl').on("click","p a",function(){
      if($(this).html() == '数码'){
        location.href = "http://localhost/project/goodsList/goodList.html";
      }
   })
    
  })();

  //search
  ; (function () {
    $('nav').find('.btn').click(function () {
      if ($('nav').find('.txt').position().left != 0) {
        console.log(1)
        $('nav').find('.txt').stop().animate({
          left: 0
        }, 200);
      } else {
        console.log(2)
        $('nav').find('.txt').stop().animate({
          left: 275
        }, 200);
      }
    })
  })();


    //cookie 
;(function(){
  var logCookie = getCookie('tel');
  
  if(logCookie != ''){
    logCookie = JSON.parse(logCookie);
    $('.login,.register').remove();
    $('.header').find('.active').append(`<a href= '#' class ='tel'>${logCookie.user}</a><a href='#'class='sec'>注销</a>`);
     $('.sec').click(function(){console.log(1)
       setCookie('tel','');
       $('.tel,.sec').remove();
      $('.login').css('display','block');
      $('.header').find('.active').append(`<a href= 'login/login.html' class ='login'>登录</a><a href='register/register.html'class='regster'>注册</a>`);
      //  location.reload = "http://localhost/project/index.html";
     });
  }
})();



//pic
;(function(){
  function Magnifier(){
    // 1.选元素
        this.span = $(".pic span").get(0);
        this.sBox = $('.s_box').get(0);
        this.bBox = $('.b_box').get(0);
        this.Img = $('.b_box img').get(0); 
    // 2.绑定事件：鼠标进入：出现，移动，离开：消失
        this.init();
    }
    Magnifier.prototype.show = function(){
        this.span.style.display = "block";
        this.bBox.style.display = "block";
    }

    Magnifier.prototype.move = function(pos){
        var l = pos.x - this.span.offsetWidth/2;
        var t = pos.y - this.span.offsetHeight/2;
        (l<0) && (l=0);
        (t<0) && (t=0);
        (l > this.sBox.offsetWidth - this.span.offsetWidth) &&
        (l = this.sBox.offsetWidth - this.span.offsetWidth);
        (t > this.sBox.offsetHeight - this.span.offsetHeight) &&
        (t = this.sBox.offsetHeight - this.span.offsetHeight);

        this.span.style.left = l + "px";
        this.span.style.top = t + "px";
        this.Img.style.left = -l/(this.sBox.offsetWidth - this.span.offsetWidth)*(this.Img.offsetWidth-this.bBox.offsetWidth) + "px";
        this.Img.style.top = -t/(this.sBox.offsetHeight - this.span.offsetHeight)*(this.Img.offsetHeight-this.bBox.offsetHeight) + "px";
    }
    
    Magnifier.prototype.hide = function(){
        this.span.style.display = "none";
        this.bBox.style.display = "none";
    }

    Magnifier.prototype.init = function(){
    // 绑定事件：鼠标进入：出现，移动，离开：消失
    var that = this;
        this.sBox.onmouseover = function(){
            that.show();
            this.onmousemove = function(eve){
                var e = eve || window;
                that.move({
                    x:e.pageX - this.offsetLeft,
                    y:e.pageY - this.offsetTop,
                });
                // console.log(this.offsetLeft)
            }
        }
        this.sBox.onmouseout = function(){
            that.hide();
        }
    }

    new Magnifier;
})();


 //tab
 ;(function(){
        $('.msg-txt').on('click','li',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        
 })();


  //scroll
  ; (function () {
    var t = 0;
    var scrollT = document.documentElement.scrollTop;
    if(scrollT>0){
      $('header').stop().animate({
        top:-56
      },150);
      $("nav").stop().animate({
        top:0
      },150);
    }

    //回到顶部
    $('#goTop').click(function(){
      $('body,html').stop().animate({
        scrollTop:0
      },500,function(){
        $('header').stop().animate({
          top:0,
        },150)
        $("nav").stop().animate({
          top:56,
        },150)
      });
    });
  
    // 下滑隐藏header
    document.onmousewheel = function (e) {
      scrollT = document.documentElement.scrollTop;
      if(scrollT>700){
        $('#goTop').stop().show();
      }else{
        $('#goTop').stop().hide();
      }
      var e = e || window.event;
      var delta = e.detail ? -e.detail / 3 : e.wheelDelta / 120;
      if(delta == -1){
        $('header').stop().animate({
          top:-56
        },150)
        $("nav").stop().animate({
          top:0
        },150)
      }else{
        $('header').stop().animate({
          top:0,
        },150)
        $("nav").stop().animate({
          top:56,
        },150)
      }
    }
  })();

 


}

