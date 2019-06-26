function pageY(elem)
{
    return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
}

function resizeIframe()
{
    var height = document.documentElement.clientHeight;
    height -= pageY(document.getElementById(iframe_id))+ buffer ;
    height = (height < 0) ? 0 : height;
    document.getElementById(iframe_id).style.height = height + 'px';
}

function openSrc(url)
{
    document.getElementById(iframe_id).src = url;
    resizeIframe();
}

var buffer = 0; // scroll bar buffer
var iframe_id = 'ifm';
window.onresize = resizeIframe;
