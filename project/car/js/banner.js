function Banner(opt){
    class Ban{
        constructor(opt){
            this.items = opt.items;
            this.left = opt.left;
            this.right = opt.right;
            this.list = opt.list;
            this.timeout = opt.timeout;
            this.in = 0;
            this.out = this.items.length-1;
            this.init();
        }
        init(){
            
            var that = this;
            this.l = this.leftMove.bind(this);
            this.r = this.rightMove.bind(this);
            this.items.css('left',this.items.eq(0).width()).eq(0).css('left',0);
            this.left.click(this.l);
            this.right.click(this.r);
            this.list.click(function(){
                that.out = that.in;
               that.in = $(this).index();
               if(that.in>that.out){
                that.display(-1);
               }else if(that.in<that.out){
                that.display(1);
               }
            });
            this.items.parent().hover(()=>{
                clearInterval(this.timer);
               },()=>{
                this.autoPlay();
               })
            this.autoPlay();
        }
        leftMove(){
            this.changeIndex(1);
            this.display(1);
        }
        rightMove(){
            this.changeIndex(0);
            this.display(-1);
            }
        changeIndex(type){
            this.out = this.in;
            if(type){
                if(this.in == 0 ){
                    this.in = this.items.length-1;
                }else{

                    this.in--;
                }
            }else{
                if(this.in == this.items.length-1 ){
                    this.in = 0;
                }else{

                    this.in++;
                }
            }
        }
        display(type){
            this.list.eq(this.in).addClass('active').siblings().removeClass('active');
            this.items.eq(this.in).css('left',-this.items.eq(0).width()*type).stop().animate({
                left:0
            },500);
            this.items.eq(this.out).css('left',0).stop().animate({
                left:this.items.eq(0).width()*type
            },500)
        }
        autoPlay(){
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                this.rightMove();
            },this.timeout);
        }
    }
    new Ban(opt);
}



// ; (function () {
//     Banner({
//       items: $(".banner").find(".pic").children('li'),
//       left: $(".banner").find('.left'),
//       right: $(".banner").find('.right'),
//       list: $(".banner").children('.list').children('li'),
//       timeout: 3000
//     });
//   })();
