"use strict";


window.addEventListener('DOMContentLoaded', init);

let counter = 0;

function init()
{
    document.querySelector("button").addEventListener("click", activateSurprise);
}

function activateSurprise(e) {
    e.preventDefault();
    let imgToDisplay = document.querySelector("img");
    if (counter != 1) {
        showRemoveVideo(e);
        document.querySelector("header h1").innerHTML = "Got you, fooled!";
        document.querySelector("button").innerHTML = "Maybe Press again?"
        counter++;
    }
    else {

        showRemoveVideo(e);
        showRemovePicture(e);
        document.querySelector("header h1").innerHTML =
                  "What do you think? <3";
        document.querySelector("button").innerHTML =
            "Don't even dare";
        counter = 0;
    }
    
    }


function showRemoveVideo(e) {
    let videoToPlay = document.querySelector("video");
    if (videoToPlay.classList.contains("dontdisplay"))
    {
        videoToPlay.classList.remove("dontdisplay");
        videoToPlay.autoplay = true;
    }
    else {
        videoToPlay.classList.add("dontdisplay");
        videoToPlay.removeAttribute("autoplay");
        videoToPlay.muted = true;
        counter = 0;
    } 
}
    
function showRemovePicture(e) {
    let imgToDisplay = document.querySelector("img");
    if (imgToDisplay.classList.contains("dontdisplay")) {
        imgToDisplay.classList.remove("dontdisplay");
    } else {
        imgToDisplay.classList.add("dontdisplay");
    }
}