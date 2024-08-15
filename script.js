const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const trackName = document.getElementById('track-name');

const tracks = [
    { src: 'track1.mp3', name: 'Track 1' },
    { src: 'track2.mp3', name: 'Track 2' },
    { src: 'track3.mp3', name: 'Track 3' }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audioPlayer.src = tracks[index].src;
    trackName.textContent = tracks[index].name;
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Play icon
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
}

// Load the initial track
loadTrack(currentTrackIndex);
