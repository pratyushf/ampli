let songIndex = 0;
let audioElement = new Audio('songs/7.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressbar');
let myGif = document.getElementById('mygif')
let masterPrev = document.getElementById('prev');
let masterNext = document.getElementById('pause');
let songItems = Array.from(document.getElementsByClassName('songs'));
let songs = [
  {
    songname: "Let Me Love You",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songname: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songname: "Cielo - Huma-Huma",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songname: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songname: "Superhero-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songname: "Good Life-NCS-Release",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songname: "Closer--NCS-Release",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songname: "Bring Me Back-NCS-Release",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
];

// songItems.forEach((element,i)=>{
//   element.getElementById("songimg")[0].src = songs[i].coverPath; 
//   element.getElementById("songname")[0].innerText = songs[i].songname;
// })


masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    myGif.style.opacity = 1;
  }

  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    myGif.style.opacity = 0;
  }
})

audioElement.addEventListener('timeupdate',()=>{
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('input',()=>{
  audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

// masterPrev.addEventListener('click',()=>{
//   audioElement.src(songs/++1)
// })