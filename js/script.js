var rightPressed_1=false;
var leftPressed_1=false ;
var upPressed_1=false;
var downPressed_1=false;

var rightPressed_2=false;
var leftPressed_2=false ;
var upPressed_2=false;
var downPressed_2=false;

var rightPressed_3=false;
var leftPressed_3=false ;
var upPressed_3=false;
var downPressed_3=false;
/////想簡化的話，可以使用陣列



var x=1000;
var div_1 =document.getElementById("character_1"); //要使用這條程式，.html裡的js引入要擺在最下方，因為若js引入式擺在最上方的話，dom還未建立，則會出現null錯誤
var div_2 =document.getElementById("character_2");
var div_3 =document.getElementById("character_3");

var test=document.getElementById("test");

test.innerHTML='test';


div_1.style.left = '100px';
div_1.style.top='100px';
div_2.style.left = '500px';
div_2.style.top='300px';
div_3.style.left = '300px';
div_3.style.top='500px';

document.addEventListener("keydown", keyDownHandler, false); //add keylistener
document.addEventListener("keyup", keyUpHandler, false);



var x_speed=10;//這個值變了的話，checkBoarder的數值也要變
var y_speed=10;

function keyDownHandler(e) {//the action of the key listener
	/////////////////////////////
        if(e.keyCode == 39) {
            rightPressed_1 = true;
           
           // div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
        }
        else if(e.keyCode == 37) {
            leftPressed_1 = true;
            //div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';

        }
        else if(e.keyCode == 38){
        	upPressed_1 = true;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
        }
        else if(e.keyCode == 40){
        	downPressed_1 = true ;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
        }
    //////////////////////////////character_1

	/////////////////////////////
        if(e.keyCode == 68) {
            rightPressed_2 = true;
           
           // div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
        }
        else if(e.keyCode == 65) {
            leftPressed_2 = true;
            //div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';

        }
        else if(e.keyCode == 87){
        	upPressed_2 = true;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
        }
        else if(e.keyCode == 83){
        	downPressed_2 = true ;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
        }
    //////////////////////////////character_2    wasd

	/////////////////////////////
        if(e.keyCode == 102) {
            rightPressed_3 = true;
           
           // div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
        }
        else if(e.keyCode == 100) {
            leftPressed_3 = true;
            //div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';

        }
        else if(e.keyCode == 104){
        	upPressed_3 = true;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
        }
        else if(e.keyCode == 101){
        	downPressed_3 = true ;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
        }
    //////////////////////////////character_3    8546

}
function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed_1 = false;
            
        }
        else if(e.keyCode == 37) {
            leftPressed_1 = false;
            

        }
        else if(e.keyCode == 38){
        	upPressed_1 = false;
        }
        else if(e.keyCode == 40){
        	downPressed_1 = false ;
        }
    //////////////////////////////character_1

	/////////////////////////////
        if(e.keyCode == 68) {
            rightPressed_2 = false;
           
           // div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
        }
        else if(e.keyCode == 65) {
            leftPressed_2 = false;
            //div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';

        }
        else if(e.keyCode == 87){
        	upPressed_2 = false;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
        }
        else if(e.keyCode == 83){
        	downPressed_2 = false ;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
        }
    //////////////////////////////character_2    wasd
    	/////////////////////////////
        if(e.keyCode == 102) {
            rightPressed_3 = false;
           
           // div.style.left = parseInt(document.getElementById("character_1").style.left)+x+'px';
        }
        else if(e.keyCode == 100) {
            leftPressed_3 = false;
            //div.style.left = parseInt(document.getElementById("character_1").style.left)-x+'px';

        }
        else if(e.keyCode == 104){
        	upPressed_3 = false;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)-y+'px';//若要使用此列程式碼，要先初始化
        }
        else if(e.keyCode == 101){
        	downPressed_3 = false ;

        	//div.style.top = parseInt(document.getElementById("character_1").style.top)+y+'px';
        }
    //////////////////////////////character_3    8546


}



function checkBoarder_1(){//第一個角色的邊界判斷
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=1000;
	var boarder_bottom=550;

	var character_1_x=parseInt(document.getElementById("character_1").style.left);
	var character_1_y=parseInt(document.getElementById("character_1").style.top);
	

	test.innerHTML="character_1:"+character_1_x+"  "+character_1_y;


		if(rightPressed_1){
			if((character_1_x)>(boarder_right-55)){
				return false;
			}
		}
		else if(leftPressed_1){
			if(character_1_x<(boarder_left+10)){
				return false;
			}
		}
		else if(upPressed_1){
			if(character_1_y<boarder_top+10){
				return false;
			}
		}
		else if(downPressed_1){
			if(character_1_y>boarder_bottom-55){
				return false;
			}
		}
	return true;
}
function checkBoarder_2(){//第一個角色的邊界判斷
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=1000;
	var boarder_bottom=550;

	var character_2_x=parseInt(document.getElementById("character_2").style.left);
	var character_2_y=parseInt(document.getElementById("character_2").style.top);
	

	test.innerHTML=test.innerHTML+"  character_2:"+character_2_x+"  "+character_2_y;


		if(rightPressed_2){
			if((character_2_x)>(boarder_right-55)){
				return false;
			}
		}
		else if(leftPressed_2){
			if(character_2_x<(boarder_left+10)){
				return false;
			}
		}
		else if(upPressed_2){
			if(character_2_y<boarder_top+10){
				return false;
			}
		}
		else if(downPressed_2){
			if(character_2_y>boarder_bottom-55){
				return false;
			}
		}
	return true;
}
function checkBoarder_3(){//第一個角色的邊界判斷
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=1000;
	var boarder_bottom=550;

	var character_3_x=parseInt(document.getElementById("character_3").style.left);
	var character_3_y=parseInt(document.getElementById("character_3").style.top);
	

	test.innerHTML=test.innerHTML+"  character_3:"+character_3_x+"  "+character_3_y;


		if(rightPressed_3){
			if((character_3_x)>(boarder_right-55)){
				return false;
			}
		}
		else if(leftPressed_3){
			if(character_3_x<(boarder_left+10)){
				return false;
			}
		}
		else if(upPressed_3){
			if(character_3_y<boarder_top+10){
				return false;
			}
		}
		else if(downPressed_3){
			if(character_3_y>boarder_bottom-55){
				return false;
			}
		}
	return true;
}




function move(){
	////////////////////every movement
	if(checkBoarder_1()){
		if(rightPressed_1){
			div_1.style.left = parseInt(document.getElementById("character_1").style.left)+x_speed+'px';
		}
		else if(leftPressed_1){
			div_1.style.left = parseInt(document.getElementById("character_1").style.left)-x_speed+'px';
		}
		else if(upPressed_1){
			div_1.style.top = parseInt(document.getElementById("character_1").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_1){
			div_1.style.top = parseInt(document.getElementById("character_1").style.top)+y_speed+'px';
		}
	}

	if(checkBoarder_2()){
		if(rightPressed_2){
			div_2.style.left = parseInt(document.getElementById("character_2").style.left)+x_speed+'px';
		}
		else if(leftPressed_2){
			div_2.style.left = parseInt(document.getElementById("character_2").style.left)-x_speed+'px';
		}
		else if(upPressed_2){
			div_2.style.top = parseInt(document.getElementById("character_2").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_2){
			div_2.style.top = parseInt(document.getElementById("character_2").style.top)+y_speed+'px';
		}
	}
	if(checkBoarder_3()){
		if(rightPressed_3){
			div_3.style.left = parseInt(document.getElementById("character_3").style.left)+x_speed+'px';
		}
		else if(leftPressed_3){
			div_3.style.left = parseInt(document.getElementById("character_3").style.left)-x_speed+'px';
		}
		else if(upPressed_3){
			div_3.style.top = parseInt(document.getElementById("character_3").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_3){
			div_3.style.top = parseInt(document.getElementById("character_3").style.top)+y_speed+'px';
		}
	}
	requestAnimationFrame(move);




}
move();



alert("a");