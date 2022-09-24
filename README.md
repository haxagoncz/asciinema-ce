# Asciinema player custom element
This library wraps [`asciinema-player`](https://github.com/asciinema/asciinema-player) in a custom element, so it can be used in any framework without needing to run `AsciinemaPlayer.create` for each player you want to spawn.

## Installation

### npm
You can use your preferred package manager
```shell
npm i asciinema-player-ce
# or
pnpm i asciinema-player-ce
# or
yarn add asciinema-player-ce
```

and import it later using
```js
import 'asciinema-player-ce'
```

### html
Add the following script to your document
```
<script src="https://cdn.jsdelivr.net/npm/asciinema-player-ce@latest/lib/asciinema-player.iife.min.js"></script>
```

## Usage
You can simply use asciinema-player tag.

```html
<!-- put your cast id inside src -->
<asciinema-player src=""></asciinema-player>
```
