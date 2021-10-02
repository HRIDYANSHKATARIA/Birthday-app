var canvas=new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var birthday_image="BirthdayImage.jpg";

function new_image(get_image) 
{ fabric.Image.fromURL(get_image, function(Img) { birthday_image = Img;
     birthday_image.scaleToWidth(700);
      birthday_image.scaleToHeight(510);
     birthday_image.set({ top:0, left:0 });
      canvas.add(birthday_image);
     }); }


function playsound(){
	x.play();
}
