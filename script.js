console.log("You are tuned into Spotify Player by Tanishk Yadav");

let songIdx=1;
let audioEle = new Audio('Assets/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgBar=document.getElementById('myProgBar');
let gif=document.getElementById('eq');
let masterSongName=document.getElementById('masterSong');
let songItems = Array.from(document.getElementsByClassName('songItem'));

gif.style.opacity=0;

let songs=[
    {songName:"CryBaby",filePath:"Assets/1.mp3",coverPath:"Assets/crybaby.jpeg"},
    {songName:"Racing into the night",filePath:"Assets/2.mp3",coverPath:"Assets/racing.jpg"},
    {songName:"Suzume-no-Tojimari",filePath:"Assets/3.mp3",coverPath:"Assets/suzume.webp"},
    {songName:"Gurenge",filePath:"Assets/4.mp3",coverPath:"Assets/Gurenge.jpeg"},
    {songName:"Unravel",filePath:"Assets/5.mp3",coverPath:"Assets/unravel.jpeg"},
    {songName:"KickBack",filePath:"Assets/6.mp3",coverPath:"Assets/kickback.jpeg"},
    {songName:"AshesOnFire",filePath:"Assets/7.mp3",coverPath:"Assets/aof.jpeg"},
    {songName:"Shigatsu",filePath:"Assets/8.mp3",coverPath:"Assets/ylia.jpeg"},
    {songName:"Ao-Haru-Ride",filePath:"Assets/9.mp3",coverPath:"Assets/ahr.jpeg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        document.getElementById(`${songIdx}s`).style.backgroundColor='black';    
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.getElementById(`${songIdx}`).classList.remove('fa-play');
        document.getElementById(`${songIdx}`).classList.add('fa-pause');
    }
    else{
        audioEle.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        document.getElementById(`${songIdx}`).classList.remove('fa-pause');
        document.getElementById(`${songIdx}`).classList.add('fa-play');
    }
})

function incSongIdx(){
    if(songIdx<songs.length){
        songIdx+=1;
    }
    else if(songIdx=songs.length){
        songIdx=1;
    }
}

function decSongIdx(){
    if(songIdx>1){
        songIdx-=1;
    }
}

document.getElementById('next').addEventListener('click',()=>{
    document.getElementById(`${songIdx}`).classList.remove('fa-pause');
    document.getElementById(`${songIdx}`).classList.add('fa-play');
    document.getElementById(`${songIdx}s`).style.backgroundColor='transparent';
    incSongIdx();
    document.getElementById(`${songIdx}`).classList.remove('fa-play');
    document.getElementById(`${songIdx}`).classList.add('fa-pause');
    document.getElementById(`${songIdx}s`).style.backgroundColor='black';
    // makeAllPlay();
    audioEle.src=`Assets/${songIdx}.mp3`;
    audioEle.classList.add('fa-play');
    masterSongName.innerText=songs[songIdx-1].songName;
    audioEle.currentTime=0;
    audioEle.play();
    gif.style.opacity=1;
})

document.getElementById('prev').addEventListener('click',()=>{
    document.getElementById(`${songIdx}`).classList.remove('fa-pause');
    document.getElementById(`${songIdx}`).classList.add('fa-play');
    document.getElementById(`${songIdx}s`).style.backgroundColor='transparent';
    decSongIdx();
    document.getElementById(`${songIdx}`).classList.remove('fa-play');
    document.getElementById(`${songIdx}`).classList.add('fa-pause');
    document.getElementById(`${songIdx}s`).style.backgroundColor='black';
    audioEle.src=`Assets/${songIdx}.mp3`;
    masterSongName.innerText=songs[songIdx-1].songName;
    audioEle.currentTime=0;
    audioEle.play();
    gif.style.opacity=1;
    audioEle.classList.remove('fa-play');
    audioEle.classList.add('fa-pause');
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
    audioEle.currentTime=myProgBar.value * audioEle.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songBtn')).forEach((element)=>{
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songBtn')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        idx=songIdx;
        document.getElementById(`${songIdx}s`).style.backgroundColor='transparent';
        songIdx=parseInt(e.target.id);
        document.getElementById(`${songIdx}s`).style.backgroundColor='black';
        makeAllPlay();
        if(songIdx!=idx){
            masterSongName.innerText=songs[songIdx-1].songName;
            audioEle.src=`Assets/${songIdx}.mp3`;
            audioEle.currentTime=0;
        }
        else{
            document.getElementById(`${songIdx}s`).style.backgroundColor='black';
        }
        console.log(songIdx);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioEle.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('myProgBar').addEventListener('progress',()=>{
    if(progress==100){
        incSongIdx();
        audioEle.src=`Assets/${songIdx}.mp3`;
        masterSongName.innerText=songs[songIdx].songName;
        audioEle.currentTime=0;
        audioEle.play();
        gif.style.opacity=1;
        audioEle.classList.remove('fa-play');
        audioEle.classList.add('fa-pause');
    }
})