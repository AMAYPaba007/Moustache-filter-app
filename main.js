var noseX = 0;
var noseY = 0;
moustache= "";

function preload() {
  moustache= loadImage('moustache.png');
}
    

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {
  image(video, 0, 0, 500, 500);
  image(moustache, noseX - 50, noseY, 100 + 15, 100);

}

function modelLoaded() {
  console.log("pose net is working");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}}

function takeSnapshot() {
  save("MyImage.png");
  
}
