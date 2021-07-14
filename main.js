canvas=new fabric.Canvas("myCanvas");

ball_x=10;
ball_y=10;

hole_x=990;
hole_y=400;

function hole_img(){
fabric.Image.fromURL("hole.png",function(Img){
hole_object=Img;
hole_object.scaleToWidth(50);
hole_object.scaleToHeight(50);
hole_object.set({
top:hole_y,
left:hole_x
});
canvas.add(hole_object);
});
ball_image();
}
	
function ball_image(){
fabric.Image.fromURL("ball.png",function(Img){
ball_object=Img;
ball_object.scaleToWidth(50);
ball_object.scaleToHeight(50);
ball_object.set({
top:ball_y,
left:ball_x
});
canvas.add(ball_object);
});
}	

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){
up();
console.log("The x and y coordinates are "+ball_x+","+ball_y)
console.log("up");
yo();
}
if(keyPressed == '40'){
down();
console.log("The x and y coordinates are "+ball_x+","+ball_y)
console.log("down");
yo();
}
if(keyPressed == '37'){
left();
console.log("The x and y coordinates are "+ball_x+","+ball_y)
console.log("left");
yo();
}
if(keyPressed == '39'){
right();
console.log("The x and y coordinates are "+ball_x+","+ball_y)
console.log("right");
yo();
}
}
function up(){
if(ball_y>10){
ball_y-=10;
}
canvas.remove(ball_object);
ball_image();
}
function down(){
if(ball_y<440){
ball_y+=10;
}
canvas.remove(ball_object);
ball_image();
}
function left(){
if(ball_x>10){
ball_x-=10;
}
canvas.remove(ball_object);
ball_image();
}
function right(){
if(ball_x<1040){
ball_x=ball_x+10;
}
canvas.remove(ball_object);
ball_image();
}
function yo(){
if((ball_x==hole_x)&&(ball_y==hole_y)){
canvas.remove(ball_object);
console.log("Reached the goal.");
window.alert("You won");
}
}