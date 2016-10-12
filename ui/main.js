
button.onClick=function()
{
    counter+=1;
    var request=new XMLHttpRequest();
    request.onreadystatechange= function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var button=document.getElementById("clicker");
                 button.innerHTML=counter.toString();
                 alert("what");
            }
        }
    };
   
    
};