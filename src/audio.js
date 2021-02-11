var path = '';
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

document.addEventListener('drop', (event) => {
  event.preventDefault();
  event.stopPropagation();

  for (const f of event.dataTransfer.files) {
    // Using the path attribute to get absolute file path
    audio_fetch(f.path)
    console.log('File Path of dragged files: ', f.path)
  }
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});

document.addEventListener('dragenter', (event) => {
  console.log('File is in the Drop Space');
});

document.addEventListener('dragleave', (event) => {
  console.log('File has left the Drop Space');
});
