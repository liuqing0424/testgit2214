
var TranData;
var SETPINDEX;

function getBusinessProcess() {
    cordova.exec(onSuccess_TranceQuery, onFailure_TranceQuery, "PageFlow", "getBusinessProcess",
                 []);
    
    function onSuccess_TranceQuery(data)
    {
        TranData = eval("("+data+")").steps;
        //要跳转的坐标为
        console.log("TranData2"+JSON.stringify(TranData));
        
        
        //console.log(TranData[0].index);
        
        for(var i = 0; i<TranData.length;i++)
        {
            console.log(TranData[i].index);
            if(TranData[i].index == 1)
            {
                changePage(TranData[i].url,null);
                SETPINDEX = 1;
                break;
            }
        }
    }
    function onFailure_TranceQuery()
    {
    }
}


function exitBusinessView(value){
    console.log("value======" + value);
    if(value=="exit")
    {
    changePage("page/steps/exit.html",null);
    }

}





function changePage(url,fade){

    console.log("流程定义开始，当前url 为："+url);
    var url=$.mobile.path.makeUrlAbsolute(url);
    console.log("jqueryMobile 确定当前url为："+url);
    $.mobile.changePage(url,fade,false,false);

}



$(document).bind("pagechangefailed",function(e,data)
{// 页面改变之前的最后一个事件，回调两个参数

    console.log("Change page failed...");

    var toPage = data.toPage;
    var options = data.options;

    //告诉naive 此笔业务是否需要 继续办理其它业务 01 是   00 否
    var continueFlag = 'NO';

    cordova.exec(onSuccess_pagechangefailed, onFailure_pagechangefailed, "PageFlow", "popToMainVC",
        [ continueFlag ]);

    function onSuccess_pagechangefailed()
    {

    }

    function onFailure_pagechangefailed()
    {

    }



});



$(document).bind("pagechange",function(e,data){// 页面改变之前的最后一个事件，回调两个参数

    console.log("Change page successfully completed...");

    /*var toPage = data.toPage;
     var options = data.options;

     cordova.exec(onSuccess_pagechange, onFailure_pagechange, "PageFlow", "loadWebResponse",[toPage[0].baseURI]);

     function onSuccess_pagechange(str)
     {
     console.log("执行cordova..............成功");
     console.log("pagechangesuccess...."+str+".......成功");
     }

     function onFailure_pagechange()
     {

     console.log("执行cordova..............失败");
     console.log("pagechangefail...........失败");

     }*/

});


