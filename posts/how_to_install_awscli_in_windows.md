---
title: ""
subtitle: ""
date: ""
cr: ["https://www.artstation.com/shizuorin"]
---

Link [High Score](https://www.youtube.com/watch?v=B4jopG1wX88) 

 [PICO-8](https://www.lexaloffle.com/pico-8.php) 


Image ![images/pico-8 demo](/images/blog/jelpi_demo.gif)

## Large Header

List

- Item 1
- Item 2 with link [CELESTE](<https://en.wikipedia.org/wiki/Celeste_(video_game)>)).


## Header

Link [PICO-8](https://www.lexaloffle.com/pico-8.php)

Note with italic text
> PICO-8 is a [fantasy console](https://www.lexaloffle.com/pico-8.php?page=faq) for making, sharing and playing tiny games and other computer programs. It _feels_ like a regular console, but runs on Windows / Mac / Linux.

Link[VSCode](https://code.visualstudio.com/))

Link [Lua](https://www.lua.org/)

Image ![images/pico-8-code-editor](/images/blog/pico-8-code-editor.png)

Link [Pong](https://en.wikipedia.org/wiki/Pong) 

Link [official manual](https://www.lexaloffle.com/pico-8.php?page=manual), or [watch a video](https://www.youtube.com/watch?v=K5RXMuH54iw).

## Header

Literals  `16` colours, your canvas is `128` pixels wide and your whole program needs to fit within `65536` 

Link [napkin if written out](https://www.lexaloffle.com/bbs/files/16585/PICO-8_Cheat-Sheet_0-9-2.png).

Links [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System) and an [Atari](https://en.wikipedia.org/wiki/Atari).

|  Table             | PICO-8    | Atari     | NES       |
| ------------------ | --------- | --------- | --------- |
| **Year**           | 2015      | 1977      | 1985      |
| **Resolution**     | 128 x 128 | 160 x 192 | 256 x 240 |
| **Colors**         | 16        | 128       | 52        |
| **Cartridge Size** | 32 kB     | 4 kB      | 128 kB    |

## Header



### Game Loop

Literal `_update()`  variable `f`, which increases by `1` each update

Code snippet
```lua
-- this is a global variable
f = 0

-- this is a special function that pico-8 invokes 30 times per second.
function _update()
    f += 1
end
```

### Header

Image ![images/pico-8-sprite-editor](/images/blog/pico-8-sprite-editor.png)

Literal `_draw()`, and `_update()`.

Code Snippet
```lua
x = 64
y = 64

function _draw()
  cls(0) -- clear the screen and set it to color 0 (black).
  spr(1, x, y) -- draw the sprite ID 1 at (x, y)
end
```



Image ![images/pico-8-draw-sprite](/images/blog/pico-8-draw-sprite.png)

### Header

Literal `btn(k)` function, which returns true with the button with ID `k` is being pressed by the player. `k` ranges from 0 to 6 for a single player, and each number represents either the arrow keys, or two arbitrary game-play buttons like the `A` and `B` on a NES controller.

Image ![images/nes_controller](/images/blog/classic_nes_controller.jpg)

Code Snippet
```lua
function _update()
  if btn(0) then x -= 2 end -- move left
  if btn(1) then x -+ 2 end -- move right
end
```

Image ![images/pico-8-movement](/images/blog/pico-8-movement.gif)

## Ideas to get started

Links [PICO-8](https://www.lexaloffle.com/pico-8.php) and [manual](https://www.lexaloffle.com/pico-8.php?page=manual).

List

- [Pong](https://en.wikipedia.org/wiki/Pong) (1972)
- [Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders) (1978)
- [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) (1980)
- [Snake](<https://en.wikipedia.org/wiki/Snake_(video_game_genre)>) (1997)

Link [Mario](https://en.wikipedia.org/wiki/Super_Mario_Bros.) clone!
