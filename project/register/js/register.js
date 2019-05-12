onload = function(){
    let telVal = $('#tel').val();
    let VerificationVal = $('#Verification').val();
    let re = reg();
    let onoffT,onoffV,onoffP,onoffP1;

    let ma = Ma();
    $('.main').find('.ma').html(ma);
    $s = $('<span></span>');
    $s.addClass('popup');
    $d = $('<div></div>');
    $d.addClass('notice');
    
    $('.ver').on('click','.ma,.switch',function(){
        ma = Ma();
        $('.main').find('.ma').html(ma);
    })


    $('#tel,#Verification').focus(function(){
        if(this.value === telVal || this.value === VerificationVal){
            this.value ='';
        }
    }).blur(function(){
        if(this.value === ''){
            if(this.id === 'tel'){
                this.value = telVal;
            }else if(this.id === 'Verification'){
                this.value = VerificationVal;
            }
        }else{
            if(this.id === 'tel'){
                    getData();
                  if(!re.Tel()){
                        onoffT = false;
                        createSapn(this,'手机号格式错误');
                    }else{
                        onoffT = true;
                    }
            }else if(this.id === 'Verification'){
                getData();
               if(!re.Ver()){
                onoffV = false;
                createSapn(this,'验证码错误');
              }else{
                onoffV = true;
              }
            }
        }
    })

    $('#pass,#pass1').blur(function(){
        if(this.id === 'pass'){
            getData();
            if(!re.Pass()){
             onoffP = false;
             createSapn(this,'密码格式错误');
           }else{
               onoffP = true
           }
        }else if(this.id === 'pass1'){
            getData();
            if(!re.Pass1()){
             onoffP1 = false;
             createSapn(this,'两次密码不一致');
            }else{
                onoffP1 = true;
            }
        }
    })

    $('#btn').click(function(){
      if(onoffT && onoffV && onoffP && onoffP1){
        if($('#checkbox').prop("checked") ){
            console.log($('#tel').val(),$('#pass').val())
            $.ajax({
                url:"http://www.icodeilife.cn/ctrl/register.php",
                data:{
                    tel:$('#tel').val(),
                    pass:$('#pass').val()
                },
                success:function(res){
                    switch(res){
                        case "0":
                        $d.html("用户名已被使用");
                        $('.wrap').css('display','block').append($d).children('.notice').stop().animate({
                            height:100
                        });
                        setTimeout(() => {
                            $('.notice').stop().animate({
                                height:0
                            }).remove();
                            $('.wrap').css('display','none');
                        }, 2000);break;
                        case "1":
                        $d.html('"注册成功，即将将跳转到登录界面..."');
                        $('.wrap').css('display','block').append($d).children('.notice').stop().animate({
                            height:100
                        });
                            res = JSON.parse(res);
                            console.log(res)
                            setTimeout(() => {
                                $('.notice').stop().animate({
                                    height:0
                                }).remove();
                                $('.wrap').css('display','none');
                                location.href = "http://localhost/project/login/login.html";
                            }, 2000);
                            break;
                        case "2":
                        $d.html("数据不全，重新输入");
                        $('.wrap').css('display','block').append($d).children('.notice').stop().animate({
                            height:100
                        });
                        setTimeout(() => {
                            $('.notice').stop().animate({
                                height:0
                            }).remove();
                            $('.wrap').css('display','none');
                        }, 3000);;break;
                    }
                },
                
            })
            
        }else{
         createSapn(this,'请同意条款后再点击提交');
        }
      }else{
        createSapn(this,'注册内容有误');
      }
    })
    
    

    function createSapn(ele,str){
        $s.css({
            position:"absolute",
            width:ele.offsetWidth,
            background:"rgba(255,255,255,.7)",
            height:0,
            top:40,
            left:1,
            zIndex:2,
            border:'1px solid red',
            fontSize:"14px",
            lineHeight:"40px"
        });
        $s.html(str);
        $(ele).parent().append($s);
      $('.popup').stop().animate({
          height:40,
      })
      clearTimeout(ele.timer);
   ele.timer = setTimeout(()=>{
        $('.popup').remove();
    },2000);

    }

    
    function getData(){
        re.init({
            tel:$('#tel').val(),
Verification:$('#Verification').val(),
            pass:$('#pass').val(),
            pass1:$('#pass1').val() ,
            ma:ma
          })
    }

    function Ma(){
        var str = '';
        for(var i =0 ;i<4;i++){
            str += random(0,9);
        }
        return str;
    }

   function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
   }
}
