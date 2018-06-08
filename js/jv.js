var myImge=document.getElementById("myPhoto");
var imageArray=["images/B2.jpg","images/B3.jpg","images/B4.jpg","images/B5.jpg","images/B6.jpg"];
var imageIndex=0;
function changeImage(){
	myPhoto.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length){
		imageIndex=0;
	}
}
var intervalHandle = setInterval(changeImage,2000);
myphoto.onclick=function(){
	clearInterval(intervalHandle);
}