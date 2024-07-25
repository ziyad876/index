function numberkey(val)
{
    document.getElementById("screen").value+=val
}
function clearbtn(){
    document.getElementById("screen").value=""
}
function equalto(){
    var text = document.getElementById("screen").value
    var equal = eval(text)
    document.getElementById("screen").value=equal
}