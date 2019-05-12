function reg(opt){
    class Reg{
        constructor(){
         
        }
        init(opt){
            this.tel = opt.tel || '';
            this.Verification = opt.Verification || '';
            this.pass = opt.pass || '';
            this.pass1 = opt.pass1 || '';
            this.ma = opt.ma ;
        }
        Tel(){
            var re = /^1[34578]\d{9}$/;
            if(re.test(this.tel)){
                return true;
            }else{
                return false;                
            }
        }
        Ver(){
        //    console.log(this.Verification,this.ma)
            if(this.Verification === this.ma){
                return true;
            }else{
                return false;                
            }
        }
        Pass(){
            var re =  /^[a-zA-Z0-9]{6,18}$/;
            if(re.test(this.pass)){
                return true;
            }else{
                return false;                
            }
        }
        Pass1(){
            if(this.pass === this.pass1){
                return true;
            }else{
                return false;                
            }
        }
    }
   return new Reg(opt);
}