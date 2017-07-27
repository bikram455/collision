function Collision(elementId){
  var game=document.getElementById(elementId);
  var coins=[];
  this.init=function(){
  	//Creating Board
  	var board=new Board();
  	board.createBoard();
  	game.appendChild(board.board);
  	
    //Creating coins(5 coins)
  	var queen=new Coins('red',0,0,1);
  	queen.createCoin();
  	board.append(queen.coin);
  	coins.push(queen);

  	var coin2=new Coins('lightgreen');
  	coin2.createCoin();
  	board.append(coin2.coin);
  	coins.push(coin2);

  	var coin3=new Coins('yellow');
  	coin3.createCoin();
  	board.append(coin3.coin);
  	coins.push(coin3);
  	
  	var coin4=new Coins('lightblue');
  	coin4.createCoin();
  	board.append(coin4.coin);
  	coins.push(coin4);

  	var coin5=new Coins('maroon');
  	coin5.createCoin();
  	board.append(coin5.coin);
  	coins.push(coin5);

  	//Animation
  	var animator=new Animator(board,coins);
  	animator.Animate();
  }
}
var collision= new Collision('game');
collision.init();