let addSongBtn = document.getElementById('addSongBtn')
let songList = document.querySelector('.songList')
let songDiv = document.querySelectorAll('.songDiv')[0]

addSongBtn.addEventListener('click', function(){
  let newSongs = songDiv.cloneNode(true)
  let input = newSongs.getElementsByTagName('input')[0]
  input.value = ''
  songList.appendChild(newSongs)
})