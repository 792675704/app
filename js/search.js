function search(data){
	//console.log(data)
	if(data==0){
		// var wu=document.querySelector(".seach-tit").innerHTML="没有商品";
		//console.log("")
	}else{
		//
		//var list=document.querySelector(".sea-list").innerHTML="data";
		//list.show();
		var arr=data.map(function(item){
		 	//console.log(item)
		 	//console.log(item.goodsName)
		 	//var goodsname=JSON.parse(item.goodsName)
		 	return '<div class="sea-list">'+item.goodsName+'</div>'
		 })
		//console.log(arr)
		document.querySelector(".seabox").innerHTML=arr;
		//
	}

}

var page1 = {
	click:function(){
		var ipt=document.querySelector(".search-input");
		
		var that=this;
		var modal=$(".modal-seach")
		ipt.addEventListener("keydown", function(){
			var iptval=ipt.value;
			//console.log(modal)
			//console.log(this.value)
			modal.show();
			 that.jsonp("http://datainfo.duapp.com/shopdata/selectGoodes.php?callback=search&selectText="+iptval);
		}, true)
		
	},
    init1:function(){
    	this.click();
       
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