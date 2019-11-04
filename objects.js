var playlist = new Object({'Sara Bareilles' : 'Gravity'})

function updatePlaylist(play, name, title) {
  return Object.assign({}, play, { [name] : title })
}

function removeFromPlaylist(play, name) {
  return delete play.name
}
