// js/player.js
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressBar = document.getElementById('progressBar');
  const timeDisplay = document.getElementById('timeDisplay');
  const trackTitle = document.getElementById('trackTitle');

  if (!music || !playPauseBtn || !progressBar) return;

  // Optional: set title from file name
  try {
    const src = music.querySelector('source')?.getAttribute('src') || '';
    const name = src.split('/').pop() || 'Lagu';
    trackTitle.textContent = `Lagu: ${decodeURIComponent(name.replace(/[-_]/g, ' '))}`;
  } catch (e) {}

  // Play/pause toggle
  playPauseBtn.addEventListener('click', async () => {
    try {
      if (music.paused) {
        await music.play();
        playPauseBtn.textContent = '⏸️ Pause';
      } else {
        music.pause();
        playPauseBtn.textContent = '▶️ Play';
      }
    } catch (err) {
      // autoplay might be blocked; fallback: show message in console
      console.warn('Audio play blocked by browser (user gesture required).', err);
    }
  });

  // Update progress and time
  music.addEventListener('timeupdate', () => {
    if (!music.duration || isNaN(music.duration)) return;
    const pct = (music.currentTime / music.duration) * 100;
    progressBar.value = pct;
    const m = Math.floor(music.currentTime / 60);
    let s = Math.floor(music.currentTime % 60);
    if (s < 10) s = '0' + s;
    timeDisplay.textContent = `${m}:${s}`;
  });

  // Seek when user drags progress
  let seeking = false;
  progressBar.addEventListener('input', () => {
    seeking = true;
    if (!music.duration || isNaN(music.duration)) return;
    const newTime = (progressBar.value / 100) * music.duration;
    timeDisplay.textContent = `${Math.floor(newTime/60)}:${('0'+Math.floor(newTime%60)).slice(-2)}`;
  });
  progressBar.addEventListener('change', () => {
    if (!music.duration || isNaN(music.duration)) return;
    const newTime = (progressBar.value / 100) * music.duration;
    music.currentTime = newTime;
    seeking = false;
  });

  // When track ends, reset button
  music.addEventListener('ended', () => {
    playPauseBtn.textContent = '▶️ Play';
    progressBar.value = 0;
  });
});
