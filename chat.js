var outer = document.getElementById('c');
var inner = document.getElementById('inner');




var y = inner.clientHeight;
console.log(y)



function atEnd()
{
    outer.scrollTop = 2*y;
}
