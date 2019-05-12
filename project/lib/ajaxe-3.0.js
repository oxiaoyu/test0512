function ajax(opt){
    var type = opt.type || 'get';
    var data = opt.data || {};
    var timeout = opt.timeout || 2000;
    var error =  opt.error || function(){};
    if(type == 'jsonp'){
        var jsonpName = opt.jsonpName;
        var d1 = new Date();
        callbackName = '_ty'+ d1.getTime();
    }

        var str = ""
        for(var i in data){
            str = str + i + "=" + data[i] + "&";
        }

        if(type == 'get' || type == 'jsonp'){
            var d = new Date();
        opt.url = opt.url + "?" + str +'_qf='+d.getTime();
        }

    var xhr = new XMLHttpRequest();
    xhr.open(type,opt.url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            opt.success(xhr.responseText,'success',xhr);
        }else if(xhr.readyState == 4 && xhr.status != 200){
            error(xhr.status,'error',xhr);
        }
    }

    switch(type){
        case 'get':xhr.send(null);break;
        case 'post': xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    xhr.send(str.slice(0,str.length-1));break;
        case 'jsonp':
            var script = document.createElement("script");
            script.src = opt.url + '&' + jsonpName + '=' + callbackName ;console.log(opt.url + '&' + jsonpName + '=' + callbackName)
            document.body.appendChild(script)
            var successOnoff = true;
            var errorOnoff = true;
            window[callbackName] = function(res){
                if(errorOnoff){
                    opt.success(res,'success',{msg:'jsonp请求没有xhr对象'});
                    successOnoff = false;
                }
            }
            setTimeout(()=>{
              if(successOnoff){
                error('timeout','timeout',{msg:'jsonp请求没有xhr对象'});
                errorOnoff = false;
              }
            },timeout);
    }
}    

    // ajax({
    //     // url:'http://localhost/ajax-pack-1/get.php',
    //     url:'https://api.asilu.com/weather/',
    //     type:'jsonp',
    //     jsonpName:'callback',
    //     data:{
    //         city:'上海'
    //     },
    //     success:function(a,b,c){
    //         console.log(a,b,c);
    //     },
    //     error:function(a,b,c){
    //         console.log(a,b,c);
    //     },
    //     timeout:1000,
    // });
