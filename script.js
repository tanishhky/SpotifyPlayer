console.log("You are tuned into Spotify Player by Tanishk Yadav");

let songIdx=0;
let audioEle = new Audio('Assets/CryBaby.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgBar=document.getElementById('myProgBar');
let gif=document.getElementById('myProgBar');


let songs=[
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"Racing into the night",filePath:"Assets/.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    // {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioEle.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

audioEle.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioEle.currentTime/audioEle.duration)*100);
    myProgBar.value=progress;
})

myProgBar.addEventListener('change',()=>{
    // console.log("entered");
    audioEle.currentTime=myProgBar.value * audioEle.duration/100;
})

