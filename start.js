var root = document.getElementById('root');

var imageNormal = document.getElementById('image-normal');
var imageMuda = document.getElementById('image-muda');

var punching = document.getElementById("video-punching");
var overlay = document.getElementById("overlay")

var clicks = 0;
var isVidRunning = 0

var audio = new Audio('sound.mp3');
audio.play();


function toggleImage(down) {
    if(isVidRunning == 0){
        imageNormal.style.display = down ? 'none' : 'block';
        imageMuda.style.display = down ? 'block' : 'none';
    } 
    else{
        punching.play();
    }
}



// Counter
function mud(a) {
    audio.play();
    toggleImage(true);

    if (++clicks % 6 === 0) {
        isVidRunning = 1;
        imageNormal.style.display = 'none';
        imageMuda.style.display = 'none';
        punching.style.display = 'block';
        toggleImage(true);
        }
    
}

toggleImage(false);

root.addEventListener('mousedown', function(a) {if(a.button !== 0) return; mud(a); });
root.addEventListener('mouseup', function(a) { if(a.button !== 0) return; toggleImage(false); });
root.addEventListener('touchstart', function(e) { mud(a); e.preventDefault(); });
root.addEventListener('touchmove', function(e) { e.preventDefault(); });
root.addEventListener('touchend', function(e) { toggleImage(false); });
root.addEventListener('touchcancel', function(e) { toggleImage(false); });
