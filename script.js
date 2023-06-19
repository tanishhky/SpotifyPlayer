console.log("You are tuned into Spotify Player by Tanishk Yadav");

let songIdx=0;
let audioEle = new Audio('Assets/CryBaby.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgBar=document.getElementById('myProgBar');


let songs=[
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
    {songName:"CryBaby",filePath:"Assets/CryBaby.mp3",coverPath:"covers/1.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        console.log("Entered this functions")
        audioEle.play();
    }
})

myProgBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})