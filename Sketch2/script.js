let a = 0.0;
let s = 0.0;

function setup() {
    createCanvas(720, 400);
    angleMode(DEGREES);
    noCursor();
    frameRate(2)
}
function draw() {
    clear()

    translate(width/2, height/2)
    console.log("Run Check");    
    scale(1.5)
    background('#121840'); 
    let hr = hour(); 
    let mn = minute(); 
    let sc = second();
    let secAngle=map(sc,0,60,0,360)    
    let minAngle=map(mn,0,60,0,360)    
    let hrAngle=map(hr%12,0,12,0,360)    
    fill(255)
    rotate(-90)
    stroke(255)
    strokeWeight(3)
    noFill()
    stroke('red')
    arc(0, 0, 180, 180, 0,minAngle);
    stroke('yellow')
    arc(0, 0, 160, 160, 0,hrAngle);
    stroke('green')
    arc(0, 0, 200, 200, 0,secAngle);
    push();
    rotate(secAngle)
    stroke('green')
    strokeWeight(3)
    line(0, 0,60,0);
    pop();


    push();
    rotate(minAngle)
    strokeWeight(3)
    stroke('red')
    line(0, 0,50,0);
    pop();

    push();
    rotate(hrAngle)
    strokeWeight(3)
    stroke('yellow')
    line(0, 0,40,0);
    pop();
    rotate(90)
    fill(255)
    strokeWeight(0)
    text(`${hr%12}:${mn}:${sc}`, -20, 30)
    ellipse(0, 0, 10)

}