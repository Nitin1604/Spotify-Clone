console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// List of songs in the form of arrays
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/song1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/song2.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/song3.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/song4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/song5.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/song2.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/song2.mp3", coverPath: "covers/cover7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/song2.mp3", coverPath: "covers/cover8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/song2.mp3", coverPath: "covers/cover9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/song4.mp3", coverPath: "covers/cover10.jpg"},
    {songName: "Daku Song", filePath: "songs/Daku Song.mp3", coverPath: "covers/cover11.jpg"},
    {songName: "Ram Siya Ram Bhajan", filePath: "songs/Ram Siya Ram Bhajan.mp3", coverPath: "covers/cover12.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// makeAllPlays Function
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// if user clicks on the next button then next song will played
document.getElementById('next').addEventListener('click', ()=>{

    // if the index of the song is greater then 0 then play the next songs one by one , whenever the user clicks on the next button
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

// if user clicks on the previous button then previous song will played
document.getElementById('previous').addEventListener('click', ()=>{

    // if the index of the song is less then 0 then play previous songs , whenever the user clicks on the previous button
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})