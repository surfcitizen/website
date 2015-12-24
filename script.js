var currentTime = new Date();

window.onload = function() 
{
    document.getElementById("greeting").innerHTML = getGreeting(currentTime);
};

getGreeting = function(time)
{   
    var h = time.getHours();
    var greeting;
    if (h>0 && h<12)
    {
        greeting = "Good Morning";
    }
    else if (h>=12 && h < 18)
    {
        greeting = "Good Afternoon";
    }
    else 
    {
        greeting = "Good Night";
    }
    
    return greeting;
};