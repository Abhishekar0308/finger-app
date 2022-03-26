Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot()
    { Webcam.snap(function (data_uri) { 
    
    document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
     
    });
    }
    

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/G2QIZ1AGB/',modelLoaded);
    
    function modelLoaded()           
    {
       console.log('Model Loaded!');
    }
    function check()
    { img = document.getElementById('captured_image');
    classifier.classify(img ,gotResult);
    }
    
    function gotResult (error,results){
    
        if(error){
    
    console.error(error);
        }
    else{
        console.log(results);   
        document.getElementById("result_emotion_name").innerHTML = results [0].label;
        prediction_1= results [0].label;  
    
        speak();
        if(results [0].label == " victory")
        {
        document.getElementById("update_finger").innerHTML ="&#9996;";
    
        }
        if(results [0].label == "super")
        {
        document.getElementById("update_finger").innerHTML ="&#128076;";
    
        }
        if(results [0].label == "best")
        {
        document.getElementById("update_finger").innerHTML ="&#128077;";
    
        }
        
    }
}