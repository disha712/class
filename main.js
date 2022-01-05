var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if (content="take my selfie") {
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds"
    var speak_data = document.getElementById("textbox").value;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5,000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

var camera=document.getElementById("camera");
function take_snapshot(){
    webcam.snap(function(data_url)
    {
        document.getElementById("result").innerHTML='<img id="selfie_image"src="'+data_url+'">';
    })
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.click();
}