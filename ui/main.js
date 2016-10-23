var button=document.getElementById("clicker");
button.onClick=function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange= function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                //var counter=request.responseText;
                var span=document.getElementById("bla");
                 span.innerHTML="changed";
                 alert("what");
            }
        }
    };
   
    request.open('GET',"http://grangergirl.imad.hasura-app.io/counter",true);
    request.send(null);
};