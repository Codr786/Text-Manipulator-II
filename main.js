function setup(){
    video= createCapture(VIDEO);
    video.size(560,500);
    video.position(50,100);

    canvas= createCanvas(550,550);
    canvas.position(750,170);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97')

}
function modelLoaded(){
    console.log('Posenet Is Intialized! ')
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}