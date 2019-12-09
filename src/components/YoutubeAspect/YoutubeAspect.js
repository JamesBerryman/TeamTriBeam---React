const YoutubeAspect = function() {
  var i = 0;
  //will calculate the size of a youtube video so it fits the article box.
  var articleWidth =
    document.getElementsByClassName("toparticle")[0].offsetWidth - 40; //you have 20px padding, got to take 40px of total width.
  var videoHeight = Math.floor((articleWidth / 16) * 9);
  console.log(articleWidth);
  console.log(videoHeight);
  var youTubeVideos = document.getElementsByClassName("youTubeClip");
  for (i = 0; i < youTubeVideos.length; i++) {
    youTubeVideos[i].style.width = articleWidth + "px";
    youTubeVideos[i].style.height = videoHeight + "px";
  }
};

export default YoutubeAspect();
