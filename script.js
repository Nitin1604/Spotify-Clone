console.log("Welcome to Spotify Clone");
// audioElement.play(); --> It will play the audio

// Intialize the variables
let songIndex = 0;

// ----- Playing the songs by javascript ----- 
let audioElement = new Audio('songs/song1.mp3');
// ----- Playing the songs by javascript ----- 

// masterPlay is the id of play button
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/song1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/song2.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/song3.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/song4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/song5.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/song6.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/song7.mp3", coverPath: "covers/cover7.jpg"}
] 
// Using forEach Loop
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/ pause click
masterPlay.addEventListener('click', ()=>{
     if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
         masterPlay.classList.remove('fa-play')
         masterPlay.classList.add('fa-pause')
         gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause')
            masterPlay.classList.add('fa-play')
            gif.style.opacity = 0;

        }
       
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    //  Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

// Change event in myprogressBar id
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 
