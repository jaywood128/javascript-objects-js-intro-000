var playlist = {
  'artist name': 'song title',
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}
function removeFromPlaylist(playlist, artist) {
  return delete playlist.artist
}