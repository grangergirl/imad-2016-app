var button=document.getElementById("clicker");
alert(button.innerHTML.toString());
button.onClick=function()
{ var span=document.getElementById("bla");
                 span.innerHTML="changed";
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