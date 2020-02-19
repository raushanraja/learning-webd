let x=0;
let w1 = 150, w2 = 90, w3 = 30, w0=170,w4=130;

function setup() {
    createCanvas(300, 300);
    background('#fbeebe');
    noLoop()
    noStroke()
}


function circle1(shape, fillColor) {
    fill('#ffffff')
    w1+=x;
    ellipse(150, 150, w1)

}


function circle2(shape, fillColor) {
    w2+=x
    fill('#00ca96')
    ellipse(150, 150,w2)
}


function circle3(shape, fillColor) {
    w3+=x
    fill('#ff6b42')
    ellipse(150, 150, w3)
}


function circle4(shape, fillColor) {
    w4+=x;
    fill('#ff0075')
  
    ellipse(150, 150, w4)
}


function draw() {
    w0+=x;
    if(w0>=200){
        x=-.80;    
    }
    if(w0<=170){
        x=.80;
    }
    circle1()  // Added extra for enables next one to show effect
    circle4()
    fill('#fff')
    ellipse(150, 150, 120)
    circle2()
    fill('#fff')
    ellipse(150, 150, 60)
    circle3()
    loop()
}