let heart=document.getElementsByClassName("icon");
let color=document.getElementById("one");
let liked=document.getElementById("like")
let likes=document.getElementById("like").innerText;
likes=parseInt(likes);


console.log(heart);
heart[0].addEventListener("click", function (){
	
	heart[0].style.display="none";
	color.style.display="block";
	likes++;
	liked.innerText=`${likes}`;
	
});

console.log(one);

color.addEventListener("click",function(){
	color.style.display="none";
	heart[0].style.display="block";
	likes--;
	liked.innerText=`${likes}`;

	
});





