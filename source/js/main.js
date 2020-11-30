//******菜单栏展开******//
window.onload = function () {
    statUp();
}

function doMenu(obj, strDeep) {
    var items = obj.parentNode.getElementsByTagName("ul");
    //获取a 对象你节点li 下包含的 所有ul集合
    var itmUl;
    var deeps = strDeep; //strDeep 为当前菜单的级数
    if (items.length > 0) {
        itmUl = items[0];
        // alert(itmUl);
    }
    if (itmUl.className != "ex") {
        // cxAll();//当前节点为关闭状态时,先执行关闭所有ul子菜单
        if (deeps == '2') { //若要展开三级菜单当,还要将其二级父菜单展开
            itmUl.parentNode.parentNode.className = "ex";
            itmUl.parentNode.parentNode.style = "display:inherit;visibility:inherit;list-style-image: none;list-style-type: none;";
        }
        //debugger
        if (deeps == '3') { //若要展开三级菜单当,还要将其二级父菜单展开
            itmUl.parentNode.parentNode.className = "ex";
            itmUl.parentNode.parentNode.style = " display:inherit;visibility:inherit;list-style-image:none;list-style-type:none;";
            itmUl.parentNode.parentNode.parentNode.className = "ex";
            itmUl.parentNode.parentNode.parentNode.style = " display:inherit;visibility:inherit;list-style-image:none;list-style-type:none;";
        }
        itmUl.className = "ex"; //展开下级菜单
        itmUl.style = "display:inherit;visibility:inherit;list-style-image:none;list-style-type:none;"; //展开下级菜单
    } else {
        itmUl.className = "cx";
        itmUl.style = "display:none;visibility:hidden;list-style-image:none;list-style-type:none;";
    }
}

function statUp() {
    cxAll();
    var ulDom = document.getElementById("navbar-top");
    var items = ulDom.getElementsByTagName("ul");
}

function cxAll() {
    //debugger;
    var ulDom = document.getElementById("navbar-top");
    var items = ulDom.getElementsByTagName("ul");
    for (var i = 0; i < items.length; i++) {
        items[i].className = "cx";
        items[i].style = "display:none;visibility:hidden;";
    }
}


//******菜单栏吸顶******//
var tit = document.getElementById("nav");
//alert(tit);
//占位符的位置
var rect = tit.getBoundingClientRect();//获得页面中导航条相对于浏览器视窗的位置
var inser = document.createElement("nav");
tit.parentNode.replaceChild(inser, tit);
inser.appendChild(tit);
inser.style.height = rect.height + "px";

//获取距离页面顶端的距离
var titleTop = tit.offsetTop;
//滚动事件
document.onscroll = function () {
    //获取当前滚动的距离
    var btop = document.body.scrollTop || document.documentElement.scrollTop;
    //alert(btop)
    //alert(titleTop)
    //如果滚动距离大于导航条据顶部的距离
    if (btop > titleTop) {
        //为导航条设置fix
        tit.style = "position:fixed;top:0px;width:14.41%";
    } else {
        //移除fixed
        tit.style = "";
    }
}

//******一言******//
// fetch('https://v1.hitokoto.cn/?c=k')
// .then(function (res) {
// 	return res.json();
// })

// .then(function (data) {
// 	var hitokoto = document.getElementById('hitokoto');
// 	hitokoto.innerText = data.hitokoto + '——【' + data.from + '】';
// })

// .catch(function (err) {
// 	console.error(err);
// })