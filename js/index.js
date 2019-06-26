function showElement(el, bool)
{
    var elem = document.getElementById(el);
    if (bool==true)
        elem.style.display = 'block';
    if (bool==false)
        elem.style.display = 'none';
}

function showOnly(el)
{
    showElement('lib-core', false);
    showElement('lib-graphics', false);
    showElement('lib-math', false);
    showElement('lib-util', false);
    showElement('lib-game', false);
    showElement('lib-j2d', false);
    showElement(el, true);
}
