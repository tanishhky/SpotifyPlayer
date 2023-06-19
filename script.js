console.log("You are tuned into Spotify Player by Tanishk Yadav");

let songIdx=0;
let audioEle = new Audio('Assets/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgBar=document.getElementById('myProgBar');
let gif=document.getElementById('myProgBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"CryBaby",filePath:"Assets/1.mp3",coverPath:"Assets/crybaby.jpeg"},
    {songName:"Racing into the night",filePath:"Assets/2.mp3",coverPath:"Assets/racing.jpg"},
    {songName:"Suzume-no-Tojimari",filePath:"Assets/3.mp3",coverPath:"Assets/suzume.webp"},
    {songName:"CryBaby",filePath:"Assets/1.mp3",coverPath:"Assets/crybaby.jpeg"},
    {songName:"Racing into the night",filePath:"Assets/2.mp3",coverPath:"Assets/racing.jpg"},
    {songName:"Suzume-no-Tojimari",filePath:"Assets/3.mp3",coverPath:"Assets/suzume.webp"},
    {songName:"CryBaby",filePath:"Assets/1.mp3",coverPath:"Assets/crybaby.jpeg"},
    {songName:"Racing into the night",filePath:"Assets/2.mp3",coverPath:"Assets/racing.jpg"},
    {songName:"Suzume-no-Tojimari",filePath:"Assets/3.mp3",coverPath:"Assets/suzume.webp"},
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

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
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

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songBtn')).forEach((element)=>{
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songBtn')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIdx=parseInt(e.target.id);
        makeAllPlay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioEle.src=`Assets/${songIdx}.mp3`;
        audioEle.currentTime=0;
        audioEle.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

