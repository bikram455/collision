function Board(){
  this.board;
  this.height=600;
  this.width=700;
  this.background='cadetblue';
  this.position='relative';

  this.createBoard=function(){
  	this.board=document.createElement('div');
  	this.board.style.height=this.height;
  	this.board.style.width=this.width;
  	this.board.style.background=this.background;
  	this.board.style.position=this.position;
  }
  this.append=function(object){
  	this.board.appendChild(object);
  }
}