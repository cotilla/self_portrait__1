function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
    
	var earsy = 150;
    var earshgit = 100;
    var earswith = 100;
    
    var eyebrowsy = 80;
    var eyebrowshgit = 50;
    var eyebrowswith = 5;
    
    var eyesy = 150;
    var eyeshgit = 50;
    var eyeswith = 100;
    
    var eye_pupily = 150;
    var eye_pupilhgit = 40;
    var eye_pupilwith = 40;   
    
    
	// ears
	fill("khaki");
	ellipse(100, earsy, earshgit, earswith);
	ellipse(300, earsy, earshgit, earswith);
	
	// face
	fill("khaki");
	rect(100, 50, 200, 250);
	
	// eyebrows
	fill("black");
	rect(230, eyebrowsy, eyebrowshgit, eyebrowswith);
	rect(120, eyebrowsy, eyebrowshgit, eyebrowswith);
	
	// eyes
	fill("white");
	ellipse(150, eyesy, eyeshgit, eyeswith);
	ellipse(250, eyesy, eyeshgit, eyeswith);
	
	// eyes_pupil
	fill("black");
	ellipse(150, eye_pupily, eye_pupilhgit, eye_pupilwith);
	ellipse(250, eye_pupily, eye_pupilhgit, eye_pupilwith);
	
	// nose
	fill("black");
	triangle(220, 210, 205, 210, 210, 215);

	// outline
	stroke("black");
	line(150, 250, 250, 250);
	
	// muststash
	fill("black");
	rect(148, 230, 105, 5);
	
	
	}
	
	