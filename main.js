song="";
leftWristX = 0;
leftWristY = 0;
rightWristx = 0;
rightWristY = 0;
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function modelLoaded(){
    console.log('Posnet is Initialized');
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].results[0].leftWrist.x;
        leftWristY = results[0].results[0].leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);
        rightWristX = results[0].results[0].rightWrist.x;
        rightWristY = results[0].results[0].rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
    }
}