window.addEventListener('DOMContentLoaded', function() {

  const profile = {
    avatar: this.document.getElementById('avatar'),
    name: this.document.getElementById('name'),
    username: this.document.getElementById('username'),
    repositorios: this.document.getElementById('repositorios'),
    seguidores: this.document.getElementById('seguidores'),
    seguindo: this.document.getElementById('seguindo'),
    link: this.document.getElementById('link')
  }

  fetch('https://api.github.com/users/lucasgh91')
  .then(function(res) {
    return res.json()
  })
  .then(function(json) {
    profile.avatar.src = json.avatar_url
    profile.name.innerText = json.name
    profile.username.innerText = '@' + json.login
    profile.repositorios.innerText = json.public_repos
    profile.seguidores.innerText = json.followers
    profile.seguindo.innerText = json.following
    profile.link.href = json.html_url
  })
  .catch(function(error) {
    alert('Ocorreu um erro!')
  })
})