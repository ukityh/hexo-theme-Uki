document.oncontextmenu = function(){ 
	return false; 
	} 
	document.onkeydown = function()	{ 
		if (event.ctrlKey && window.event.keyCode == 67)
			{ 
				return false; 
			} 
		} 
	document.body.oncopy = function () { 
		return false; 
	} 
	document.onselectstart = function() { 
	//return false; 
	} 
	
	
function unmouse(){    
    document.oncontextmenu = new Function("return false;");
    document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && (e.keyCode == 123 || (e.keyCode == 116 && e.type!='keypress'))) 
        {
            e.returnValue = false;
            return (false);
        }
    }
}
unmouse()

window.addEventListener('keydown', function (e) {
    if(e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
    }
})