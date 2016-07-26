var rightPressed=false;
var leftPressed=false ;
var upPressed=false;
var downPressed=false;


var x=1000;
var div =document.getElementById("character_1"); //要使用這條程式，.html裡的js引入要擺在最下方，因為若js引入式擺在最上方的話，dom還未建立，則會出現null錯誤
div.style.left = '0px';
div.style.top='0px';

document.addEventListener("keydown", keyDownHandler, false); //add keylistener
document.addEventListener("keyup", keyUpHandler, false);



var x=20;
var y=20;

function keyDownHandler(e) {//the action of the key listener
        if(e.keyCode == 39) {
            rightPressed = true;
           
           // div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
            //div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';

        }
        else if(e.keyCode == 38){
        	upPressed = true;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
        }
        else if(e.keyCode == 40){
        	downPressed = true ;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
        }


}
function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
            
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
            

        }
        else if(e.keyCode == 38){
        	upPressed = false;
        }
        else if(e.keyCode == 40){
        	downPressed = false ;
        }

}

if(rightPressed){
	div.style.left = '100px';
}
else{
	div.style.left='0px';
}


function move(){
	if(rightPressed){
		div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
	}
	else if(leftPressed){
		div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';
	}
	else if(upPressed){
		div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
	}
	else if(downPressed){
		div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
	}
	requestAnimationFrame(move);
}
move();

alert("a");