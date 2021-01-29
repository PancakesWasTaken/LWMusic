var path = '';
var sigquit = False;
const audio = new Audio(path);

function audio_fetch(path_fetch){
  path = path_fetch;
}

function audio_play(play) {
  if (state) {
    audio.play();
  } else {
    audio.pause();
  }
}

function change_songs(new_path) {
  if (!audio.paused){
    audio_play(False);
  }
  audio_fetch(new_path);
  audio.currentTime = 0;
  audio_play(True);
}
