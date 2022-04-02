song1_lg = "";
song2_in = "";

function preload() {
    song1_lg = loadSound("LetGo_lg.mp3");
    song2_in = loadSound("Infinity_in.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video ,0 ,0 ,600 ,500);
}

