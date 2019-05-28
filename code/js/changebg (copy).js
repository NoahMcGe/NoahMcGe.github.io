function backgr(){
var randimg = Math.floor(Math.random()*4);
if (randimg==0){
document.getElementById('bod').className="bg1";
}else if (randimg==1){
document.getElementById('bod').className="bg2";
}else if (randimg==2){
document.getElementById('bod').className="bg3";
}else if (randimg==3){
document.getElementById('bod').className="bg4";
}
}
