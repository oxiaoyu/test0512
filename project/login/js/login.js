onload = function(){
    let re = reg();
    $s = $('<span></span>');
    $s.addClass('popup');
   $d = $('<div></div>');
    $d.addClass('notice');
    var onoffT ,onoffT;


$('#tel,#pass').blur(function(){
        if(this.id === 'tel'){
            getData();
            if(!re.Tel()){
                onoffT = false;
                createSapn(this,'手机号格式错误');
            }else{
                onoffT = true;
            }
        }else{
            getData();
                if(!re.Pass()){
                onoffP = false;
                createSapn(this,'密码格式错误');
            }else{
                onoffP = true;
            }
        }
    
});
$('#btn').click(function(){
    $(this).css('outline','none');
    if(onoffT && onoffP){

       $.ajax({
        url:"http://www.icodeilife.cn/ctrl/login.php",
        data:{
            user:$('#tel').val(),
            pass:$('#pass').val()
        },
        success:function(res){
            switch(res){
                case "0":
               $d.html("账号或密码错误");
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
                $d.html("请重新登陆");
                $('.wrap').css('display','block').append($d).children('.notice').stop().animate({
                    height:100
                });
                setTimeout(() => {
                    $('.notice').stop().animate({
                        height:0
                    }).remove();
                    $('.wrap').css('display','none');
                }, 2000);break;
                default:
                $d.html('"登录成功，3s后将自动跳转..."');
                $('.wrap').css('display','block').append($d).children('.notice').stop().animate({
                    height:100
                });
                if($('#auto').prop('checked')){
                    console.log(res)
                    setCookie("tel",res,{
                            expires:3,
                            path:"/project",
                        });
                   }else{
                    setCookie("tel",res,{
                        path:"/project",
                    });
                   }
                    setTimeout(() => {
                        $('.notice').stop().animate({
                            height:0
                        }).remove();
                        $('.wrap').css('display','none');
                        location.href = "http://localhost/project/index.html";
                    }, 3000);
                   
            }
        },
       
    })
        
    }
   
})

function getData(){
    re.init({
        tel:$('#tel').val(),
        pass:$('#pass').val(),
      })
}

function createSapn(ele,str){
    $s.css({
        position:"absolute",
        width:ele.offsetWidth,
        background:"rgba(255,255,255,.7)",
        height:0,
        top:35,
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
},3000);

}
  
}