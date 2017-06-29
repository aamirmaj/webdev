document.getElementById("my_id").addEventListener('click', function(){
    alert("Woah there boiii!");
});

document.getElementById("question").innerHTML = '<div class="blueText">Blue</div>';
var ans = confirm("are you sure?");
if(ans == true){
   // window.location.href = "http://www.jonathanpaulwood.com";
}

function updateQuestion(){
    var num = Math.random()*10;
    document.getElementById("question").innerHTML = "1+1=3";
}

document.getElementByClassName("blue").addEventListener('click', function(){
    var q = document.getElementById("question").innerTEXT;
    if(q == "Blue"){
        document.getElementById("score").innerTEXT = document.getElementById("score").innerTEXT + 1;
    updateQuestion(); 
    }
});

document.getElementByClassName("green").addEventListener('click', function(){
    updateQuestion();
});
