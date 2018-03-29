const player = document.querySelector(".player")
const video = player.querySelector('.viewer')
const prog = document.querySelector('.progress')
const progfill = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelector('.player__slider')

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}


toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', updateButton);
video.addEventListener('click', updateButton);
skipButtons.forEach(e => e.addEventListener('click', skip));
