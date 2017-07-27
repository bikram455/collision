function Coins(background,x,y,movement){
  this.coin;
  this.height=30;
  this.width=30;
  this.background=background;
  this.position='absolute';
  this.movement=0;
  if(x==0){
    this.x=0;
    this.y=0; 
  }
  else{
    this.x= x | Math.floor((Math.random()*670));
    this.y= y | Math.floor((Math.random()*570));  
  }
  
  this.angle=0;
  this.movement=movement || 0;

  this.createCoin=function(){
  	this.coin=document.createElement('div');
  	this.coin.style.height=this.height;
  	this.coin.style.width=this.width;
  	this.coin.style.background=this.background;
  	this.coin.style.position=this.position;
  	this.coin.style.left=this.x;
  	this.coin.style.top=this.y;
    this.coin.movement=this.movement;
    this.coin.angle=this.angle;
  }

  this.move=function(){
    this.x=this.x+(2*Math.cos(this.angle));
    this.y=this.y+(2*Math.sin(this.angle));
    this.coin.style.left=this.x;
    this.coin.style.top=this.y;
  }

}