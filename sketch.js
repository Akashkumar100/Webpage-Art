function setup() {
    createCanvas(6000 , 2000);
    console.log('Setup function');
}

function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
    
}

function draw() {
    r = getRandomArbitary(0,255);
    g = getRandomArbitary(0,255);
    b = getRandomArbitary(0,255);
    fill(r,g,b);
    ellipse(mouseX,mouseY,50,50);

}