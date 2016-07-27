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
var mouseTest=document.getElementById("mouseTest");
test.innerHTML='test';


div_1.style.left = '100px';
div_1.style.top='100px';
div_2.style.left = '500px';
div_2.style.top='300px';
div_3.style.left = '300px';
div_3.style.top='500px';


var div=[];
div[0]=div_1;
div[1]=div_2;
div[2]=div_3;

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



var ghost_change_bool=false;
var ghost_number=0;
var first_time=true;//判斷是否第一次random
var last_ghost_number;
var other_player=[];//除了鬼以外，其他玩家的編號



div[0].style.backgroundColor="black";
div[1].style.backgroundColor="black";
div[2].style.backgroundColor="black";



var div_Xs=[];
var div_Ys=[];





function move(){
	////////////////////every movement
	//除了動作以外，變成鬼的程式碼也可以放在這裡


/////////////抽鬼是誰
	if(!ghost_change_bool){
		if(first_time){
			ghost_number= Math.floor((Math.random() * 3) + 1)-1;//從0~2中選一個數字
		}
		else{//從第二次開始，就要紀錄上一個ghost_number，以避免ghost_number重複


			last_ghost_number=ghost_number;

			while(last_ghost_number===ghost_number){
				ghost_number= Math.floor((Math.random() * 3) + 1)-1;
			}
		}
		//div[ghost_number].style.backgroundColor="red";
		console.log(ghost_number);
		if(ghost_number===0){
			

			document.getElementById("character_2").style.backgroundColor="black";
			document.getElementById("character_3").style.backgroundColor="black";

			document.getElementById("character_1").style.backgroundColor="red";

			other_player[0]=1;
			other_player[1]=2;
		}
		else if(ghost_number===1){
			

			document.getElementById("character_1").style.backgroundColor="black";
			document.getElementById("character_3").style.backgroundColor="black";
			document.getElementById("character_2").style.backgroundColor="red";

			other_player[0]=0;
			other_player[1]=2;
		}
		else if(ghost_number===2){
			

			document.getElementById("character_1").style.backgroundColor="black";
			document.getElementById("character_2").style.backgroundColor="black";
			document.getElementById("character_3").style.backgroundColor="red";

			other_player[0]=0;
			other_player[1]=1;
		}
		ghost_change_bool=true;
	}
////////////抽鬼是誰

//////////////
document.addEventListener('mousemove', mouseMoveHandler, false);
function mouseMoveHandler(event) {//不用實作，只要按鍵按下，就會自動執行
   var div = document.getElementById("gameDrawer");
   var rect = div.getBoundingClientRect();

   var msg = "Mouse position: " + (event.clientX-rect.left) + "," + (event.clientY-rect.top) ;
   mouseTest.innerHTML=msg;
}
//////////////測試用，寫完專案要去掉




/////////////每個角色的操控
	if(checkBoarder_1()){
		if(rightPressed_1){
			div[0].style.left = parseInt(document.getElementById("character_1").style.left)+x_speed+'px';
		}
		else if(leftPressed_1){
			div[0].style.left = parseInt(document.getElementById("character_1").style.left)-x_speed+'px';
		}
		else if(upPressed_1){
			div[0].style.top = parseInt(document.getElementById("character_1").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_1){
			div[0].style.top = parseInt(document.getElementById("character_1").style.top)+y_speed+'px';
		}
	}

	if(checkBoarder_2()){
		if(rightPressed_2){
			div[1].style.left = parseInt(document.getElementById("character_2").style.left)+x_speed+'px';
		}
		else if(leftPressed_2){
			div[1].style.left = parseInt(document.getElementById("character_2").style.left)-x_speed+'px';
		}
		else if(upPressed_2){
			div[1].style.top = parseInt(document.getElementById("character_2").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_2){
			div[1].style.top = parseInt(document.getElementById("character_2").style.top)+y_speed+'px';
		}
	}
	if(checkBoarder_3()){
		if(rightPressed_3){
			div[2].style.left = parseInt(document.getElementById("character_3").style.left)+x_speed+'px';
		}
		else if(leftPressed_3){
			div[2].style.left = parseInt(document.getElementById("character_3").style.left)-x_speed+'px';
		}
		else if(upPressed_3){
			div[2].style.top = parseInt(document.getElementById("character_3").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_3){
			div[2].style.top = parseInt(document.getElementById("character_3").style.top)+y_speed+'px';
		}
	}
/////////////每個角色的操控  END


///////
	div_Xs[0]=parseInt(document.getElementById("character_1").style.left);
	div_Xs[1]=parseInt(document.getElementById("character_2").style.left);
	div_Xs[2]=parseInt(document.getElementById("character_3").style.left);
	div_Ys[0]=parseInt(document.getElementById("character_1").style.top);
	div_Ys[1]=parseInt(document.getElementById("character_2").style.top);
	div_Ys[2]=parseInt(document.getElementById("character_3").style.top);



	/*
	if(第一個other_player撞到鬼){
		遊戲結束。進行分數結算
	}
	else if(第二個other_player撞到鬼){
		遊戲結束，進行分數結算
	}
*/
   
	if((div_Xs[other_player[0]]<=(div_Xs[ghost_number]+55) && div_Xs[other_player[0]]>=div_Xs[ghost_number] &&
	   div_Ys[other_player[0]]<=(div_Ys[ghost_number]+55) && div_Ys[other_player[0]]>=(div_Ys[ghost_number]) )/*完成左上角的偵測*/ ||
	  ((div_Xs[other_player[0]]+55)<=(div_Xs[ghost_number]+55) && (div_Xs[other_player[0]]+55)>=div_Xs[ghost_number] &&
	   div_Ys[other_player[0]]<=(div_Ys[ghost_number]+55) && div_Ys[other_player[0]]>=(div_Ys[ghost_number]))/*完成右上角的偵測*/||
	  ((div_Xs[other_player[0]])<=(div_Xs[ghost_number]+55) && (div_Xs[other_player[0]])>=div_Xs[ghost_number] &&
	   (div_Ys[other_player[0]]+55)<=(div_Ys[ghost_number]+55) && (div_Ys[other_player[0]]+55)>=(div_Ys[ghost_number]))/*完成左下角的偵測*/||
	  ((div_Xs[other_player[0]]+55)<=(div_Xs[ghost_number]+55) && (div_Xs[other_player[0]]+55)>=div_Xs[ghost_number] &&
	   (div_Ys[other_player[0]]+55)<=(div_Ys[ghost_number]+55) && (div_Ys[other_player[0]]+55)>=(div_Ys[ghost_number]))

		){
		test.innerHTML='ghost_'+(ghost_number+1)+":touch player_"+(other_player[0]+1);
	}
	else if((div_Xs[other_player[1]]<=(div_Xs[ghost_number]+55) && div_Xs[other_player[1]]>=div_Xs[ghost_number] &&
	   div_Ys[other_player[1]]<=(div_Ys[ghost_number]+55) && div_Ys[other_player[1]]>=(div_Ys[ghost_number]) )/*完成左上角的偵測*/ ||
	  ((div_Xs[other_player[1]]+55)<=(div_Xs[ghost_number]+55) && (div_Xs[other_player[1]]+55)>=div_Xs[ghost_number] &&
	   div_Ys[other_player[1]]<=(div_Ys[ghost_number]+55) && div_Ys[other_player[1]]>=(div_Ys[ghost_number]))/*完成右上角的偵測*/||
	  ((div_Xs[other_player[1]])<=(div_Xs[ghost_number]+55) && (div_Xs[other_player[1]])>=div_Xs[ghost_number] &&
	   (div_Ys[other_player[1]]+55)<=(div_Ys[ghost_number]+55) && (div_Ys[other_player[1]]+55)>=(div_Ys[ghost_number]))/*完成左下角的偵測*/||
	  ((div_Xs[other_player[1]]+55)<=(div_Xs[ghost_number]+55) && (div_Xs[other_player[1]]+55)>=div_Xs[ghost_number] &&
	   (div_Ys[other_player[1]]+55)<=(div_Ys[ghost_number]+55) && (div_Ys[other_player[1]]+55)>=(div_Ys[ghost_number]))
){
		test.innerHTML='ghost_'+(ghost_number+1)+":touch player_"+(other_player[1]+1);
	//safe area的評斷放在function裡
	}

	
///////撞到鬼

	//if(div[ghost_number]碰觸到其他方塊，則結束遊戲。並依靠結束遊戲的方法，判斷誰輸誰贏)

	requestAnimationFrame(move);

}




function setGhost_change_bool(){
	if(ghost_change_bool){
		ghost_change_bool=false;
		//div[ghost_number].style.backgroundColor="black";
		//ghost_number=Math.random()*(2-0)+0;
	}
}
setInterval(setGhost_change_bool,10000);//將ghost_change_bool改回false

move();

alert("a");

/*
	現在要做做看鬼
	碰到鬼後會發生alert (因為只是要測試)

*/