function Queen(){
  this.queen;
  this.height=30;
  this.width=30;
  this.background='red';
  this.position='absolute';
  this.x=0;
  this.y=0;
  this.movement=1;
  this.angle=0;

  this.createQueen=function(){
  	this.queen=document.createElement('div');
  	this.queen.style.height=this.height;
  	this.queen.style.width=this.width;
  	this.queen.style.background=this.background;
  	this.queen.style.position=this.position;
  	this.queen.style.left=this.x;
  	this.queen.style.top=this.y;
  	this.queen.movement=this.movement;
  	this.queen.angle=this.angle;
  }

  this.move=function(){
  	this.x=this.x+(2*Math.cos(this.angle));
  	this.y=this.y+(2*Math.sin(this.angle));
  	this.queen.style.left=this.x;
  	this.queen.style.top=this.y;
  }
}