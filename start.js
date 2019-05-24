var root = document.getElementById('root');

var imageNormal = document.getElementById('image-normal');
var imageMuda = document.getElementById('image-muda');

var punching = document.getElementById("video-punching");

var counter = 0;
var isVidRunning = false;

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

function ar(i) {
    if (isVidRunning) {
        return;
    }

    toggleImage(i);

    if (++counter % 12 == 0) {
        isVidRunning = true;
        imageNormal.style.display = 'none';
        imageMuda.style.display = 'none';
        punching.style.display = 'block';
        punching.play();
    }

}

punching.onended = function () {
    imageNormal.style.display = 'block';
    imageMuda.style.display = 'none';
    punching.style.display = 'none';
    isVidRunning = false;
};

toggleImage(false);

root.addEventListener('mousedown', function(a) {if(a.button !== 0) return; ar(true); });
root.addEventListener('mouseup', function(a) { if(a.button !== 0) return; toggleImage(false); });
root.addEventListener('touchstart', function(e) { mud(a); e.preventDefault(); });
root.addEventListener('touchmove', function(e) { e.preventDefault(); });
root.addEventListener('touchend', function(e) { toggleImage(false); });
root.addEventListener('touchcancel', function(e) { toggleImage(false); });
