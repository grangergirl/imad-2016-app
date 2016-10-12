var button=document.getElementById("clicker");
var counter=0;
button.onClick=function()
{
    counter+=1;
    button.innerHTML=counter.toString();
    alert("what");
    
};