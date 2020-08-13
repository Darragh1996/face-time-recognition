const video = document.getElementById("video");

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => (video.srcObjext = stream),
    err => console.error(err)
  );
}

startVideo();
