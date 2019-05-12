
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
  let logCookie = getCookie('tel');
  if(logCookie != ''){
    logCookie = JSON.parse(logCookie);
  
    $('.login,.register').remove();
    $('.header').find('.active').append(`<a href= '#' class ='tel'>${logCookie.user}</a><a href='#'class='sec'>注销</a>`);
    
     $('.sec').click(function(){
       setCookie('tel','',{
         path:'/project'
       });
       $('.tel,.sec').remove();
      $('.login').css('display','block');
      $('.header').find('.active').append(`<a href= 'login/login.html' class ='login'>登录</a><a href='register/register.html'class='regster'>注册</a>`);
      //  location.reload = "http://localhost/project/index.html";
     })
  }else{
    location.href = "http://localhost/project/login/login.html"
  }
  
})();



  //goods

     class Car{
       constructor(opt){
        this.init();
       }
       init(){let all = true;
        let that = this;
      
        this.getCookie();
        this.getData();
        $('.goods').on("click",'.checkbox,.dele-btn,.add,.reduce',function(){
          that.checkbox = $('.goods').find('.checkbox');
          if(this.className == 'checkbox'){
        var all = true;
        for(let i = 0;i<that.checkbox.length;i++){
            if(!that.checkbox.eq(i).prop('checked')){
              all = false;
            }
          }
        that.checkedAll(all);
        that.checkNum();
          }else if(this.className == 'dele-btn'){
          that.checkbox = $('.goods').find('.checkbox');
           let ul = $(this).parent().parent();
            that.changeCookie(ul,(index)=>{
              that.goods.splice(index,1);
            });
            ul.css("height",110).stop().animate({height:0},200,function(){
              this.remove();
              $(".allnum").html($('.goods').children().length); 
              if($('.goods').children().length == 0 ){console.log(1)
                $('.goods').html('<p class="txt">你还没有选择商品</p>');
              }
              that.checkNum();
            });
          }else if(this.className == 'add' ){
             $(this).siblings('.num-txt').get(0).value++;
             let ul = $(this).parent().parent();
             that.changeCookie(ul,(index)=>{
                 that.goods[index].num = $(this).siblings('.num-txt').get(0).value;
                 that.checkNum();
             });
             
          }else if(this.className == 'reduce'){
            let ul = $(this).parent().parent();
            if($(this).siblings('.num-txt').get(0).value == 1){
              $(this).siblings('.num-txt').get(0).value = 1;
            }else{
              $(this).siblings('.num-txt').get(0).value--;
            }
            that.changeCookie(ul,(index)=>{
              that.goods[index].num = $(this).siblings('.num-txt').get(0).value;
              that.checkNum();
          });
            
          }
        });
        $('#all').click(function(){
          that.checkbox =  $('.goods').find('.checkbox');
          if($(this).prop('checked')){
            that.checked('checked');
          }else{
            that.checked('');
          }
          that.checkNum();
        });
       }
       getCookie(){
         this.goods = getCookie('goods');
        this.goods =  JSON.parse(this.goods)
       }
       getData(){
          let that = this;
           let xhr = new XMLHttpRequest();
           xhr.open('get',"http://localhost/project/data/data.json");
           xhr.onreadystatechange = function(){
             if(xhr.readyState == 4 && xhr.status == 200){
               that.res =  JSON.parse(xhr.responseText);
               that.data = that.res.phone;
               that.arr = [];
               for(let i = 0;i<that.goods.length ;i++){
                    that.data.forEach((v)=>{
                    if(v.id == that.goods[i].id ){
                      that.arr.push(v);
                    }
                  });
               }
               that.display();
             }
          }
          xhr.send(null);
       }
       changeCookie(ul,callback){
         let attr = ul.attr('index');
        this.getCookie();
     this.goods.forEach((v,index)=>{
            if(v.id == attr ){
              // this.goods.splice(index,1);
              callback(index);
              console.log(this.goods)
              setCookie('goods',JSON.stringify(this.goods),{
                path:'/project'
              });
            }
          });
       }
       checkedAll(tyle){
         if(tyle){
        $("#all").get(0).checked = "checked";
        }else{
          $("#all").get(0).checked = "";
        }
       }
       checkNum(){ 
         let allMoney = 0;
         let checkedNum =0
         let sumMoney = 0;
         let checked = $('.goods').find('.checkbox');
        
         for(let i = 0;i<checked.length;i++){
          sumMoney = parseInt(checked.eq(i).parent().siblings('.Price').html())*checked.eq(i).parent().siblings().children('.num-txt').val();
          checked.eq(i).parent().siblings('.sumMoney').html(sumMoney+'.00元');
            if(checked.eq(i).prop('checked')){
              allMoney += parseInt(checked.eq(i).parent().siblings('.sumMoney').html());
              checkedNum++;
            }
           
         }
         
         $('.sum').html(allMoney+'.00元');
         $('.checked').html(checkedNum)
       }
       checked(type){
         for(let i =0;i<this.checkbox.length;i++){
          this.checkbox.eq(i).get(0).checked = type;
         }
       }
       display(){
         let str = ''
        for(let i = 0;i<this.arr.length;i++){
         
          str += `<ul index = '${this.arr[i].id}'>
                    <li><input type ="checkbox" class="checkbox"/></li>
                    <li class="commodity">
                      <a href="#"  class="img"><img src="${this.arr[i].src}" alt=""></a>
                      <p>${this.arr[i].introduce}</p>
                  </li>
                    <li class = 'Price'>${this.arr[i].Price}元</li>
                    <li class="d-flex justify-content-center align-items-center"><span class="reduce">-</span><input type = "text" class = 'num-txt' value="${this.goods[i].num}"/><span class="add">+</span></li>
                    <li class = 'sumMoney'>${parseInt(this.arr[i].Price)*this.goods[i].num+'.00'}元</li>
                    <li class="dele"><span class ="dele-btn">&times;</span></li>
                </ul>`;
        }
        if(str != ''){
          $('.goods').html(str);
        }
        $(".allnum").html(this.arr.length);
        }
     }
     new Car();

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

