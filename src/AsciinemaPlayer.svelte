<script lang="ts">
  import { onMount } from "svelte";
  import * as AsciinemaPlayer from 'asciinema-player'

  // props
  export let src = ''
  $: console.log(src)
  $: castUrl = /[a-zA-Z\d]+/.test(src) ? `https://asciinema.org/a/${encodeURIComponent(src)}.cast` : (src.length === 0 ? 'https://asciinema.org/a/28307.cast' : src)

  // Svelte purges css, so it needs to think there are dynamic classes, so this and using class={emptyString} few times should solve this
  let emptyString = ''
  let player: HTMLElement

  // TODO: not rendering new cast
  $: () => {
    AsciinemaPlayer.create(castUrl, player)
  }

  onMount(() => {
    AsciinemaPlayer.create(castUrl, player)
  })
</script>

<svelte:options tag="asciinema-player" />

<!-- start of empty elements created so svelte doesn't purge the css -->
<div class={emptyString} style="display: none;">
  <div class={emptyString}>
    <a href="/"><div></div></a>
    <svg class={emptyString}>
      <path></path>
    </svg>
    <img src="" alt="">

    <div class={emptyString}>
      <div>
        <span>
          <svg></svg>
        </span>
      </div>
    </div>
  </div>
</div>
<!-- end of empty elements created so svelte doesn't purge the css -->

<div bind:this={player}></div>

<style lang="postcss">
@import 'asciinema-player/dist/bundle/asciinema-player.css';

</style>