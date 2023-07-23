// @ts-expect-error: importing css
import styles from 'asciinema-player/dist/bundle/asciinema-player.css'
import * as asciinema from 'asciinema-player'

export class AsciinemaPlayer extends HTMLElement {
  /* @internal */
  private player!: any

  constructor() {
    super()
  }

  static observedAttributes = ['src', 'options']

  connectedCallback() {
    this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.id = 'asciinema-player'
    wrapper.style.isolation = 'isolate'

    const style = document.createElement('style')
    style.textContent = styles
    this.shadowRoot.append(style, wrapper)

    this.createPlayer()
  }

  disconnectedCallback() {
    this.deletePlayer()
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.deletePlayer()
      this.createPlayer()
    }
  }

  /* @internal */
  private createPlayer() {
    const srcAttribute = this.getAttribute('src')
    const src = /^[a-zA-Z\d]+$/.test(srcAttribute) ? `https://asciinema.org/a/${encodeURIComponent(srcAttribute)}.cast` : srcAttribute

    let options = {}

    if (this.getAttribute('options')) {
      try {
        options = JSON.parse(this.getAttribute('options'))
      }
      catch (e) {
        console.error(e)
      }
    }
    this.player = asciinema.create(src, this.shadowRoot.getElementById('asciinema-player'), options)
  }

  /* @internal */
  private deletePlayer() {
    this.player?.dispose()
  }
}

export function useAsciinemePlayerCe() {
  const wind = typeof window !== 'undefined' ? window : undefined
  wind?.customElements?.define('asciinema-player', AsciinemaPlayer)
}
