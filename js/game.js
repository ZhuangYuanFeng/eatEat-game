/**
 * Created by MR.Zhuang on 2017/2/28.
 */


function Tank(x,y,direct,color){

    this.x=x;
    this.y=y;
    this.speed=10;
    this.direct=direct;
    this.color=color;
    this.moveUp=function(){
        this.y-=this.speed;
        this.direct=0;
    }
    this.moveRight=function(){
        this.x+=this.speed;
        this.direct=1;
    }
    this.moveDown=function(){
        this.y+=this.speed;
        this.direct=2;
    }
    this.moveLeft=function(){
        this.x-=this.speed;
        this.direct=3;
    }
}
function Hero(x,y,direct,color){
    Tank.call(this,x,y,direct,color);
}
function DrawTank(tank){
        switch(tank.direct){
            case 0:
            case 2:
                cxt.fillStyle=tank.color;
                cxt.fillRect(tank.x,tank.y,5,30);
                cxt.fillRect(tank.x+15,tank.y,5,30);
                cxt.fillRect(tank.x+6,tank.y+5,8,20);
                cxt.fillStyle=tank.color;
                cxt.arc(tank.x+10,tank.y+15,4,0,2*Math.PI,true);
                cxt.fill();
                cxt.strokeStyle = tank.color;
                cxt.lineWidth=2;
                cxt.beginPath();
                cxt.moveTo(tank.x+10,tank.y+15);

                if(tank.direct==0){
                    cxt.lineTo(tank.x+10,tank.y);
                }
                else if(tank.direct==2){
                    cxt.lineTo(tank.x+10,tank.y+30);
                }
                cxt.closePath();
                cxt.stroke();
                break;
            case 1:
            case 3:
                cxt.fillStyle=tank.color;
                cxt.fillRect(tank.x,tank.y,30,5);
                cxt.fillRect(tank.x,tank.y+15,30,5);
                cxt.fillRect(tank.x+5,tank.y+6,20,8);
                cxt.fillStyle=tank.color;
                cxt.arc(tank.x+15,tank.y+10,4,0,2*Math.PI,true);
                cxt.fill();
                cxt.strokeStyle = tank.color;
                cxt.lineWidth=1.5;
                cxt.beginPath();
                cxt.moveTo(tank.x+15,tank.y+10);
                if(tank.direct==1){
                    cxt.lineTo(tank.x+30,tank.y+10);
                }
                else if(tank.direct==3){
                    cxt.lineTo(tank.x,tank.y+10);
                }
                cxt.closePath();
                cxt.stroke();
                break;

        }
}
function Enemy(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
}
function DrawEnemy(enemy) {
    cxt.fillRect(enemy.x,enemy.y,10,10);
    cxt.fill();
    cxt.closePath();
}
var reset = function () {
    enemy.x = 10 + (Math.random() * (canvas1.width - 20));
    enemy.y = 10 + (Math.random() * (canvas1.height - 20));

};
var count=0;
function pick(hero,enemy) {
    var a = document.getElementById("cnt")
    if (
        hero.x+10 >= enemy.x && hero.x <= enemy.x+10
        && hero.y+30>=enemy.y && hero.y<=enemy.y+10
    ) {
        reset();
        count++;
    }
   a.innerHTML=count;
}

