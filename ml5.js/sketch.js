let video;
let faceMesh;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipped: false };

function preload(){
  faceMesh = ml5.faceMesh(options)
}

function mousePressed(){
  console.log(faces)
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function gotFaces(results){
  faces = results;
}

function draw() {
  image(video, 0, 0, width, height);
  for(let face of faces){
    for(let keypoint of face.keypoints){
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 3);
    }
  }
}