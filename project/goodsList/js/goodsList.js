
onload = function () {


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
  ; (function(){
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
           setCookie('tel','',{
             path:'/project'
           });
           $('.tel,.sec').remove();
          $('.login').css('display','block');
          $('.header').find('.active').append(`<a href= 'login/login.html' class ='login'>登录</a><a href='register/register.html'class='regster'>注册</a>`);
         
         })
      }
    })();

  //goods
  ;(function(){
   class GetData{
     constructor(){
       this.max = 9;
       this.index = 0;
      this.init();
     }
     init(){
       let that = this;
       this.get();
      $('.page').children('.page_list').on('click','.index,.left,.right',function(){
      
        if(this.className == 'page-link index'){
          that.index = $(this).parent().index()-1;
        that.goTop();
        that.display();
        that.active();
        } else if(this.className == 'page-link left'){
         if(that.index ==0){
          that.index = 0;
         }else{
          that.index --;
          that.goTop();
         }
      
        that.display();
        that.active();
        }else{
          if(that.index ==2 ){
            that.index = 2;
           }else{
            that.goTop();
             that.index ++;
           }
        that.display();
        that.active();
        }
      });
      $('.cont').find('.list').on('click','.addCar',function(){
        this.getAttribute('index')
        that.setCookie(this.getAttribute('index'));
        return false;
      });
      $('.cont').find('.list').on('click','li',function(){
          setCookie('open',`${this.id}`,{
            path:'/project'
          });
         location.href = 'http://localhost/project/goodsMsg/goodsMsg.html';
      })
     }
     get(){
       let that = this;
        let xhr = new XMLHttpRequest();
        xhr.open('get',"http://localhost/project/data/data.json")
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4 && xhr.status == 200){
            that.res =  JSON.parse(xhr.responseText);
            that.display();
            that.createPage()
          }
      }
      xhr.send(null);
     }
     setCookie(index){
      this.goods =getCookie('goods');
      if(this.goods ==''){
        this.goods = [{
          id:index,
          num:1
      }];
      }else{
        let type = true;
        this.goods = JSON.parse(this.goods);
        for(let i = 0;i<this.goods.length;i++){
          if(this.goods[i].id == index){
            this.goods[i].num++;
            type = false;
            break;
          }
        }
        if(type){
          this.goods.push({id:index,num:1});
        }
      }
      setCookie('goods',JSON.stringify(this.goods),{
        path:'/project'
      });
     }
     createPage(){
     this.num = Math.ceil(this.res.phone.length/this.max);
     let str = '';
     for(let i = 1;i<=this.num;i++){
      str += `<li class="page-item"><a class="page-link index">${i}</a></li>`;
     }
     str = '<li class="page-item "><a class="page-link left">上一页</a></li>' + str + '<li class="page-item "><a class="page-link right">下一页</a>';
     $('.page').children('.page_list').append(str).children().eq(1).children().addClass('active');
     }
     changeIndex(){

     }

     active(){
     $('.page').find('a').removeClass('active').parent().eq(this.index+1).children('a').addClass('active');
     }

     goTop(){
      $('body,html').stop().animate({
        scrollTop:300
      },500)
     }

     
     display(){
        let str = '';
      for(var i =this.index*this.max ;i<(this.index+1)*this.max;i++){
        if(!this.res.phone[i]){
          break;
        }
        str +=`<li id='${this.res.phone[i].id}'>
            <img src="${this.res.phone[i].src}" alt="" title = "${this.res.phone[i].src}">
            <span class="Price">￥${this.res.phone[i].Price}</span>
            <p class="introduce">${this.res.phone[i].introduce}</p>
            <p class="d-flex justify-content-between"><a href="#" class="shop">${this.res.phone[i].shop}</a> <a  class="addCar" index = '${this.res.phone[i].id}'>加入购物车</a></p>
        </li>` 
      }
     
      $('#goods').find('.cont').find('.list').html(str);
     }

     jump(){

     }

   }
   new GetData;
  })();



  //scroll
  ; (function () {
    let t = 0;
    let scrollT = document.documentElement.scrollTop;
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
      var  e = e || window.event;
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

