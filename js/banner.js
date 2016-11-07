function callback(data){
    var arr = data.map(function(item){//循环遍历出item的数据
        // console.log(item.goodsBenUrl)
        var banimg=JSON.parse(item.goodsBenUrl);//转码，得到goodsBenUrl他的路径
        //console.log(banimg[0])
        return '<div class="swiper-slide"> <img src="'+banimg[0]+'"/></div>';
    });
    document.querySelector(".swiper-wrapper").innerHTML = arr.join("");
    new Swiper(".swiper-container",{
        direction:"horizontal",
        pagination:".swiper-pagination",
        autoplay:3000               
    })
    // .height("100%")
    
    
    //for(var i=0;i<data.length;i++){//循环遍历data数据
        //var banimg=JSON.parse(data[i].goodsBenUrl);//转码，得到goodsBenUrl他的路径
       // console.log(banimg[0])//打印出这个数组的第一个数据
    //}
}
var page1 = {
    init1:function(){
        this.jsonp("http://datainfo.duapp.com/shopdata/getBanner.php");
    },
    getClass:function(fn){
        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function(){
            if(xhr.status==200&&xhr.readyState==4){
                fn(xhr.responseText)
            }
        }
        xhr.open("get","http://datainfo.duapp.com/shopdata/getBanner.php",true);
        xhr.send();
    },
    jsonp:function(path){
        var s = document.querySelector("#jsonp");
        if(s){
            s.parentNode.removeChild(s);
        }

        var script = document.createElement("script");
        script.src = path;
        script.id = "jsonp";
        document.body.appendChild(script);
    }
}

page1.init1();