nose_x = 0;
nose_y = 0;
right_wrist = 0;
left_wrist = 0;
difference = 0;

function setup()
{
   video = createCapture(VIDEO);
   video.size(550,500);
   canvas = createCanvas(560,500);
   canvas.position(550,150);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}

function draw()
{
    background('#7502FC');
    fill('#FC022F');
    stroke('#FC0202');
    text("SHOURYA JAIN",nose_x,nose_y);
    textSize(difference)
    document.getElementById("size_of_word").innerHTML = "Width & Height will be = "+difference+"px";
}

function modelLoaded()
{
   console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
     if(results.length > 0){
         console.log(results);
         nose_x = results[0].pose.nose.x;
         nose_y = results[0].pose.nose.y;
         console.log("Nose_X = "+nose_x+" Nose_Y = "+nose_y);
    
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
        console.log("Left_Wrist = "+left_wrist+" Right_Wrist = "+right_wrist+" Difference = "+difference);
    }
        
}

