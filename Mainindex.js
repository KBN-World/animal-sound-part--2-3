function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(' https://teachablemachine.withgoogle.com/models/rQeyZppeI/', modelReady);

}

modelReady()
{
    classifier.classify(gotResults);
}

gotResults(error, results)
{
    if(error) {
        console.error(error);
    } else {
        console.log(results);
       

        document.getElementById("ooh").innerHTML='Detected dog- , Detected cat-, detected cow-, detected lion- '+
        results[0].label;
        
        document.getElementById("ooh").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
       
        img=document.getElementById("image");
  

    if (results[0].label =="bark") {
        img.src = 'Dog gif.gif';
    
    } else if(results[0].label == "roar") {
        img.src = 'lion gif.gif';
   
    } else if(result[0].label == "meow") {
        img.src = 'infinity-cat.gif';
       
    }else{
        img.src = 'cow gif.gif';
     
    }
    }
}