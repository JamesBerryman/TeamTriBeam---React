import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export function youTubeAspect() {
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
}

//youTubeAspect();
