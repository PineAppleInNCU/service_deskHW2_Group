var rightPressed=false;
var leftPressed=false ;
var upPressed=false;
var downPressed=false;


var x=1000;
var div =document.getElementById("character_1"); //要使用這條程式，.html裡的js引入要擺在最下方，因為若js引入式擺在最上方的話，dom還未建立，則會出現null錯誤


var test=document.getElementById("test");

test.innerHTML='test';


div.style.left = '0px';
div.style.top='0px';

document.addEventListener("keydown", keyDownHandler, false); //add keylistener
document.addEventListener("keyup", keyUpHandler, false);



var x_speed=10;//這個值變了的話，checkBoarder的數值也要變
var y_speed=10;

function keyDownHandler(e) {//the action of the key listener
	/////////////////////////////
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
    //////////////////////////////character_1

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
    //////////////////////////////character_1

}



function checkBoarder(){//邊界判斷
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=1000;
	var boarder_bottom=550;

	var character_1_x=parseInt(document.getElementById("character_1").style.left);
	var character_1_y=parseInt(document.getElementById("character_1").style.top);

	test.innerHTML=character_1_x+"  "+character_1_y;


		if(rightPressed){
			if((character_1_x)>(boarder_right-55)){
				return false;
			}
		}
		else if(leftPressed){
			if(character_1_x<(boarder_left+10)){
				return false;
			}
		}
		else if(upPressed){
			if(character_1_y<boarder_top+10){
				return false;
			}
		}
		else if(downPressed){
			if(character_1_y>boarder_bottom-55){
				return false;
			}
		}



	return true;
}



function move(){
	////////////////////every movement
	if(checkBoarder()){
		if(rightPressed){
			div.style.left = parseInt(document.getElementById("character_1").style.left)+x_speed+'px';
		}
		else if(leftPressed){
			div.style.left = parseInt(document.getElementById("character_1").style.left)-x_speed+'px';
		}
		else if(upPressed){
			div.style.top = parseInt(document.getElementById("character_1").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed){
			div.style.top = parseInt(document.getElementById("character_1").style.top)+y_speed+'px';
		}
	}
	requestAnimationFrame(move);




}
move();



alert("a");