
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
/////鍵盤按壓事件監聽的bool

var p = true;//true 代表可以移動
var start = false;//false 遊戲還未開始，或是暫停   , true 代表可以移動
var safe = true;
var startLock=true;
var change_ghost = setInterval(setGhost_change_bool,10000);//將ghost_change_bool改回false
//換角色當鬼


function changeName1(){
    var name_element= document.getElementById('change1');
    var name = name_element.value;
    document.getElementById("p1").innerHTML = name;
    document.getElementById("ask_1_name").style.display="none";
    document.getElementById("ask_2_name").style.display="block";
    document.getElementById("s_1").innerHTML = name;
}



function changeName2(){
    var name_element= document.getElementById('change2');
    var name = name_element.value;
    document.getElementById("p2").innerHTML = name;
    document.getElementById("ask_2_name").style.display="none";
    document.getElementById("ask_3_name").style.display="block";
    document.getElementById("s_2").innerHTML = name;
}


function changeName3(){
    var name_element= document.getElementById('change3');
    var name = name_element.value;
    document.getElementById("p3").innerHTML = name;
    document.getElementById("ask_3_name").style.display="none";
    document.getElementById("s_3").innerHTML = name;

    startLock=false;
}
var c = 0;//秒數
var c1 = 0;
var c2 = 0;
var c3 = 0;
var time ;
var time1 ;
var time2 ;
var time3 ;
var doubles=[];//分數



//名次評斷

function chooseWinner_catch(other_player_beCatched,other_player){

	var players=[];
	players[0]=document.getElementById("p1").innerHTML;
	players[1]=document.getElementById("p2").innerHTML;
	players[2]=document.getElementById("p3").innerHTML;
	//
	document.getElementById("win").style.display="block";
	document.getElementById("winner").innerHTML = players[(ghost_number)]+' catches '+players[other_player_beCatched];
	document.getElementById("1").innerHTML = '1st:'+players[(ghost_number)];
	document.getElementById("2").innerHTML = '2nd:'+players[other_player];
	document.getElementById("3").innerHTML = '3rd:'+players[other_player_beCatched];
}
function chooseWinner_noCatch(){
	var players=[];
	players[0]=document.getElementById("p1").innerHTML;
	players[1]=document.getElementById("p2").innerHTML;
	players[2]=document.getElementById("p3").innerHTML;

	var place=[];
	place[0]=document.getElementById("1");
	place[1]=document.getElementById("2");
	place[2]=document.getElementById("3");

	var scores=[];
	scores[0]=doubles[0];
	scores[1]=doubles[1];
	scores[2]=doubles[2];

	

	scores.sort(function(a, b){return a-b});

	var x_st;//第幾名
	var y_st;
	var z_st;
	var number=1;

	for(var i=0;i<3;i++){//選出最高分
		if(doubles[i]===scores[2]){
			place[0].innerHTML=number+'st:'+players[i];
			x_st=i;
			break;
		}
	}
	for(var i=0;i<3;i++){//選出第二名
		if(i!=x_st){
			if(doubles[i]===scores[1]){
				if(scores[2]>scores[1]){
					number++;
				}
				place[1].innerHTML=number+'st:'+players[i];
				y_st=i;
				break;
			}
		}
	}
	for(var i=0;i<3;i++){//選出第三名
		if(i!=x_st && i!=y_st){
			if(doubles[i]===scores[0]){
				if(scores[1]>scores[0]){
					number++;
				}
				place[2].innerHTML=number+'st:'+players[i];
			}
		}
	}
	/*
		doubles[0]
		doubles[1]
		doubles[2]分數
	*/
	document.getElementById("win").style.display="block";

	/*for(var i=0;i<3;i++){
		place[i].innerHTML='1st:'+players[maxIndex];
	}*/

	/*document.getElementById("1").innerHTML = '1st:'+players[maxIndex];
	document.getElementById("2").innerHTML = '2nd:'+players[secondary];
	document.getElementById("3").innerHTML = '3rd:'+players[minIndex];*/
}
///////////


//左上角的時鐘
var game_time_minute=1;//時間，分鐘
var game_time_second=0;
var game_time="";//string  , display the time
game_time=((game_time_minute<10)?"0":"")+game_time_minute+":"+((game_time_second<10)?"0":"")+game_time_second;
//
function gameTimer(){
	gametimer=setInterval(game_timer_control,1000);
}
function game_timer_control(){

	if(game_time_second>0){
		game_time_second--;
	}
	else if(game_time_minute>0){
		game_time_minute--;
		game_time_second=59;
	}
	else{
		//
		chooseWinner_noCatch();
		
		p=false;
		clear1();
		console.log("work!");
		clearInterval(change_ghost);//遊戲結束後，要停止換鬼
		
	}
	game_time=((game_time_minute<10)?"0":"")+game_time_minute+":"+((game_time_second<10)?"0":"")+game_time_second;
	document.getElementById("totaltime").innerHTML =game_time;
}
////////時鐘







function myTime(){

	if(startLock){
		alert("請輸入玩家名字");
	}
	else{
		time = setInterval(game_timer_control, 1000);
		time1 = setInterval(myCounter1, 1000);
		time2 = setInterval(myCounter2, 1000);
		time3 = setInterval(myCounter3, 1000);
		start = true;
	}
}
function myTime1(){
	time1 = setInterval(myCounter1, 1000);
	start = true;
}
function myTime2(){
	time2 = setInterval(myCounter2, 1000);
	start = true;
}
function myTime3(){
	time3 = setInterval(myCounter3, 1000);
	start = true;
}
function myCounter() {
    document.getElementById("totaltime").innerHTML = ++c + "Sec";
}
function myCounter1() {
    document.getElementById("time1").innerHTML = ++c1 + "Sec";
    doubles[0] = c1*10;//分數
    document.getElementById("c1").innerHTML = doubles[0];
}
function myCounter2() {
    document.getElementById("time2").innerHTML = ++c2 + "Sec";
    doubles[1] = c2*10;
    document.getElementById("c2").innerHTML = doubles[1];
}
function myCounter3() {
    document.getElementById("time3").innerHTML = ++c3 + "Sec";
    doubles[2] = c3*10;
    document.getElementById("c3").innerHTML = doubles[2];
}
function clear1(){//finish the setInterval
	clearInterval(time);
	clearInterval(time1);
	clearInterval(time2);
	clearInterval(time3);
	start = false;
}
function clear1_1(){
	clearInterval(time1);
}
function clear1_2(){
	clearInterval(time2);
}
function clear1_3(){
	clearInterval(time3);
}

var x=1000;
var div_1 =document.getElementById("character_1"); //要使用這條程式，.html裡的js引入要擺在最下方，因為若js引入式擺在最上方的話，dom還未建立，則會出現null錯誤
var div_2 =document.getElementById("character_2");
var div_3 =document.getElementById("character_3");

var test  =document.getElementById("test");
var mouseTest=document.getElementById("mouseTest");



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
	var boarder_right=750;
	var boarder_bottom=550;

	var character_1_x=parseInt(document.getElementById("character_1").style.left);
	var character_1_y=parseInt(document.getElementById("character_1").style.top);
	

	


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
function checkBoarder_2(){//第二個角色的邊界判斷
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=745;
	var boarder_bottom=550;

	var character_2_x=parseInt(document.getElementById("character_2").style.left);
	var character_2_y=parseInt(document.getElementById("character_2").style.top);
	

	


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
function checkBoarder_3(){//第三個角色的邊界判斷
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=748;
	var boarder_bottom=550;

	
	var character_3_x=parseInt(document.getElementById("character_3").style.left);
	var character_3_y=parseInt(document.getElementById("character_3").style.top);
	
	

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
var count=0;
var count2=0;
var count1=0;
//var safe2 = true;
//var safe1 = true;//當safe===false，表示在安全區裡
/*
	safe->character_3   count0
	safe2->character_2  count2
	safe1->character_1  count1

	為了安全區與碰到鬼的判斷方便，把safe改為陣列
*/
var safe=[];
safe[0]=true;
safe[1]=true;
safe[2]=true;


function safeBlock(){//安全區判斷，只有畫面調為預設值，才能玩
	var boarder_left=0;
	var boarder_top=0;
	var boarder_right=748;
	var boarder_bottom=550;

	var character_1_x=parseInt(document.getElementById("character_1").style.left);
	var character_1_y=parseInt(document.getElementById("character_1").style.top);
	var character_2_x=parseInt(document.getElementById("character_2").style.left);
	var character_2_y=parseInt(document.getElementById("character_2").style.top);
	var character_3_x=parseInt(document.getElementById("character_3").style.left);
	var character_3_y=parseInt(document.getElementById("character_3").style.top);
	//////////第一個
	if((character_3_x)<(boarder_left+100)&&character_3_y<(boarder_top+100)){
		clear1_3();//停止計時器
		safe[2] = false;//when safe === false 表示正在安全區裡
		count=1; 
	}
	else if((character_3_x)<(boarder_left+100)&&character_3_y>(boarder_bottom-100)){
		clear1_3();
		safe[2] = false;
		count=1; 
	}
	else if((character_3_x)>(boarder_right-100)&&character_3_y>(boarder_bottom-100)){
		clear1_3();
		safe[2] = false;
		count=1; 
	}
	else if((character_3_x)>(boarder_right-100)&&character_3_y<(boarder_top+100)){
		clear1_3();
		safe[2] = false;
		count=1;                                    
	}
	else if((character_3_x)<(boarder_right-100)||character_3_y>(boarder_top+100)||character_3_y<(boarder_bottom-100)||(character_3_x)>(boarder_left+100)){
		safe[2] = true;
	}
	if(safe[2]==true&&count==1){//跑出安全區的話，繼續計時
		myTime3();
		count=0;
	}//count的用意：只有"原本在安全區裡"，且"現在在安全區外"的角色執行myTime3();

///////////第二個
	if((character_2_x)<(boarder_left+100)&&character_2_y<(boarder_top+100)){
		clear1_2();
		safe[1] = false;
		count2=1; 
	}
	else if((character_2_x)<(boarder_left+100)&&character_2_y>(boarder_bottom-100)){
		clear1_2();
		safe[1] = false;
		count2=1; 
	}
	else if((character_2_x)>(boarder_right-100)&&character_2_y>(boarder_bottom-100)){
		clear1_2();
		safe[1] = false;
		count2=1; 
	}
	else if((character_2_x)>(boarder_right-100)&&character_2_y<(boarder_top+100)){
		clear1_2();
		safe[1] = false;
		count2=1;                                    
	}
	else if((character_2_x)<(boarder_right-100)||character_2_y>(boarder_top+100)||character_2_y<(boarder_bottom-100)||(character_2_x)>(boarder_left+100)){
		safe[1] = true;
	}
	if(safe[1]==true&&count2==1){
		myTime2();
		count2=0;
	}
	/////////第三個
	if((character_1_x)<(boarder_left+100)&&character_1_y<(boarder_top+100)){
		clear1_1();
		safe[0] = false;
		count1=1; 
	}
	else if((character_1_x)<(boarder_left+100)&&character_1_y>(boarder_bottom-100)){
		clear1_1();
		safe[0] = false;
		count1=1; 
	}
	else if((character_1_x)>(boarder_right-100)&&character_1_y>(boarder_bottom-100)){
		clear1_1();
		safe[0] = false;
		count1=1; 
	}
	else if((character_1_x)>(boarder_right-100)&&character_1_y<(boarder_top+100)){
		clear1_1();
		safe[0] = false;
		count1=1;                                    
	}
	else if((character_1_x)<(boarder_right-100)||character_1_y>(boarder_top+100)||character_1_y<(boarder_bottom-100)||(character_1_x)>(boarder_left+100)){
		safe[0] = true;
	}
	if(safe[0]==true&&count1==1){
		myTime1();
		count1=0;
	}
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
			

			document.getElementById("pic2").src="P.png";
			document.getElementById("pic3").src="P.png";
			document.getElementById("pic1").src="M.png";

			other_player[0]=1;
			other_player[1]=2;
		}
		else if(ghost_number===1){
			

			document.getElementById("pic1").src="P.png";
			document.getElementById("pic3").src="P.png";
			document.getElementById("pic2").src="M.png";

			other_player[0]=0;
			other_player[1]=2;
		}
		else if(ghost_number===2){
			

			document.getElementById("pic1").src="P.png";
			document.getElementById("pic2").src="P.png";
			document.getElementById("pic3").src="M.png";

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
   
}
//////////////測試用，寫完專案要去掉




/////////////每個角色的操控
	if(checkBoarder_1()){
		if(rightPressed_1==true&&p==true&&start==true){
			div[0].style.left = parseInt(document.getElementById("character_1").style.left)+x_speed+'px';
		}
		else if(leftPressed_1==true&&p==true&&start==true){
			div[0].style.left = parseInt(document.getElementById("character_1").style.left)-x_speed+'px';
		}
		else if(upPressed_1==true&&p==true&&start==true){
			div[0].style.top = parseInt(document.getElementById("character_1").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_1==true&&p==true&&start==true){
			div[0].style.top = parseInt(document.getElementById("character_1").style.top)+y_speed+'px';
		}

	}

	if(checkBoarder_2()){
		if(rightPressed_2==true&&p==true&&start==true){
			div[1].style.left = parseInt(document.getElementById("character_2").style.left)+x_speed+'px';
		}
		else if(leftPressed_2==true&&p==true&&start==true){
			div[1].style.left = parseInt(document.getElementById("character_2").style.left)-x_speed+'px';
		}
		else if(upPressed_2==true&&p==true&&start==true){
			div[1].style.top = parseInt(document.getElementById("character_2").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_2==true&&p==true&&start==true){
			div[1].style.top = parseInt(document.getElementById("character_2").style.top)+y_speed+'px';
		}
	}
	if(checkBoarder_3()){
		if(rightPressed_3==true&&p==true&&start==true){
			div[2].style.left = parseInt(document.getElementById("character_3").style.left)+x_speed+'px';
		}
		else if(leftPressed_3==true&&p==true&&start==true){
			div[2].style.left = parseInt(document.getElementById("character_3").style.left)-x_speed+'px';
		}
		else if(upPressed_3==true&&p==true&&start==true){
			div[2].style.top = parseInt(document.getElementById("character_3").style.top)-y_speed+'px';//若要使用此列程式碼，要先初始化
		}
		else if(downPressed_3==true&&p==true&&start==true){
			div[2].style.top = parseInt(document.getElementById("character_3").style.top)+y_speed+'px';
		}
		safeBlock();//安全區的偵測
		

	}
////////////每個角色的操控  END
	//gameTimer();//時鐘(測試)

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
	/*
		safe->character_3   count0
		safe2->character_2  count2
		safe1->character_1  count1
		safe===false 表示在安全區裡
	*/

   var h_d=10;//hurt_decrease
	if((((div_Xs[other_player[0]])<=(div_Xs[ghost_number]+50-10) && (div_Xs[other_player[0]])>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[0]])<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[0]])>=(div_Ys[ghost_number]) )/*完成左上角的偵測*/ ||
	  ((div_Xs[other_player[0]]+50)<=(div_Xs[ghost_number]+50) && (div_Xs[other_player[0]]+50)>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[0]])<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[0]])>=(div_Ys[ghost_number]))/*完成右上角的偵測*/||
	  ((div_Xs[other_player[0]])<=(div_Xs[ghost_number]+50-10) && (div_Xs[other_player[0]])>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[0]]+50)<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[0]]+50)>=(div_Ys[ghost_number]))/*完成左下角的偵測*/||
	  ((div_Xs[other_player[0]]+50)<=(div_Xs[ghost_number]+50) && (div_Xs[other_player[0]]+50)>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[0]]+50)<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[0]]+50)>=(div_Ys[ghost_number])) ) &&
	  		safe[other_player[0]]!=false  /*在安全區裡不會被鬼抓*/
		){
		
		/////////鬼碰到人會彈出視窗排名
		chooseWinner_catch(other_player[0],other_player[1]);//第一個參數是被抓的人
		/////////彈出排名後大家都不能再動
		p=false;
		/////////時間和計分都停止
		clear1();
		clearInterval(change_ghost);//遊戲結束後，要停止換鬼
	}
	else if((((div_Xs[other_player[1]])<=(div_Xs[ghost_number]+50-10) && (div_Xs[other_player[1]])>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[1]])<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[1]])>=(div_Ys[ghost_number]) )/*完成左上角的偵測*/ ||
	  ((div_Xs[other_player[1]]+50)<=(div_Xs[ghost_number]+50) && (div_Xs[other_player[1]]+50)>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[1]])<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[1]])>=(div_Ys[ghost_number]))/*完成右上角的偵測*/||
	  ((div_Xs[other_player[1]])<=(div_Xs[ghost_number]+50-10) && (div_Xs[other_player[1]])>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[1]]+50)<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[1]]+50)>=(div_Ys[ghost_number]))/*完成左下角的偵測*/||
	  ((div_Xs[other_player[1]]+50)<=(div_Xs[ghost_number]+50) && (div_Xs[other_player[1]]+50)>=(div_Xs[ghost_number]+10) &&
	   (div_Ys[other_player[1]]+50)<=(div_Ys[ghost_number]+50-10) && (div_Ys[other_player[1]]+50)>=(div_Ys[ghost_number])) )&&
	  		safe[other_player[1]]!=false  /*在安全區裡不會被鬼抓*/

){
		
	//safe area的評斷放在function裡
		chooseWinner_catch(other_player[1],other_player[0]);
		p=false;
		clear1();
		clearInterval(change_ghost);//遊戲結束後，要停止換鬼
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
move();
alert("來玩鬼抓人囉~");

/*

	現在要做的事：
		讓使用者不能更改視窗大小>>無法做到
			只好：告訴使用者，解析度調到1366x768且螢幕大小為預設，以獲得最佳遊戲體驗。

		鬼抓人結束時，分數結算視窗不會再更動(因為有時候會在結束時換鬼，於是視窗會更動)，或是在遊戲結束時，就不會進行換鬼
			將change_ghost clear掉

		將遊戲時間變為倒數，並且增加倒數結束的勝利畫面>>OK

		評分標準
			鬼抓到人
				鬼第一名，被抓的人最後一名
			鬼沒抓到人
				以分數評斷名次
				假如平手該怎麼處理?
					同分的名次相同>>OK
			


		輸入完名字才能按start鍵>>ok
		位置判定寬鬆一點>>OK
*/