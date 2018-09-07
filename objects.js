var playlist = {
  'artist name': 'song title',
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistname]: 'songtitle'})
}