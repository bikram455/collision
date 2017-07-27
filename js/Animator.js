function Animator(board,coins){
  this.board=board;
  this.coins=coins;
  this.intervalId;
  this.event;
  this.angle;
  var that=this;

  this.Animate=function(){
  	that.event=that.board.board;
  	that.event.addEventListener('click',function(){
  	  that.event.x=event.clientX;
  	  that.event.y=event.clientY;  	  
  	  that.angle=Math.atan2(that.event.y,that.event.x);
  	  that.coins[0].angle=that.angle;
  	  that.intervalId=setInterval(function(){  	  	
  	  	for(var i=0;i<coins.length;i++){
  	  	  that.moveGame(coins[i]);
  	  	  that.checkWall(coins[i]);
  	  	}
  	  	that.checkCollision(coins);
  	  },0.01)
   	});
  }

  //Movement Function
  this.moveGame=function(object){  	  	  
  	if(object.movement==1){
  	  object.move();
  	}  	
  }

  //Checking Wall Collision
  this.checkWall=function(object){
  	if(object.x<=0 || object.x+object.width>=board.width){
  	  object.angle=(Math.PI)-object.angle;
  	}
  	else if (object.y<=0 || object.y+object.height>=board.height){
  	  object.angle=(2*Math.PI)-object.angle;
  	}
  }

  //Checking Collision
  this.checkCollision=function(coins){
  	for(var i=0;i<coins.length;i++){
      for(var j=0;j<coins.length;j++){
        if(i!=j){
          if(coins[i].x<=coins[j].x && coins[i].x+30>=coins[j].x && coins[i].y<=coins[j].y && coins[i].y+30>=coins[j].y){
            
            if(coins[i].movement==0 && coins[j].movement==1){
              coins[i].movement=1;
              coins[i].angle=coins[j].angle;
              coins[j].angle=coins[j].angle+(Math.PI);
            }
            else if(coins[i].movement==1 && coins[j].movement==0){
              coins[j].movement=1; 
              coins[j].angle=coins[i].angle;
              coins[i].angle=coins[i].angle+(Math.PI);
            }
            else if(coins[i].movement==1 && coins[j].movement==1){
              coins[i].angle=coins[i].angle+coins[j].angle;
              coins[j].angle=coins[i].angle-coins[j].angle;
              coins[i].angle=coins[i].angle-coins[j].angle;
            }
          }
        }
      }
    }
  }
  
}