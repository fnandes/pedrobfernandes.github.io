import './theme.scss'

const app = {
  avatarEl: document.getElementById('avatar'),

  onContentLoad() {
    import('./avatar.png').then((module) => {
      this.avatarEl.src = module.default
    })
  }
}

document.addEventListener('DOMContentLoaded', () => app.onContentLoad())
