# 🔄 Terminal Spinner

This project is a small Node.js script that simulates a spinning cursor animation in the terminal — similar to what you might see while something is loading.

There are two versions included to show the development process:

---

## Files

### `spinner1.js`
- The original implementation.
- Each spinner frame is manually written using `setTimeout`.
- Useful for understanding how the animation timing works.
- More repetitive and harder to maintain.

### `spinner2.js`
- A cleaner, refactored version.
- Uses a `for...of` loop and an array of symbols (`['|', '/', '-', '\\']`).
- Easier to modify the spinner sequence or timing.
- This is the recommended version to run.

---

## How It Works

- Each frame is printed using `process.stdout.write()` with a delay in between.
- `\r` (carriage return) is used to overwrite the current line in the terminal.
- After the last frame, a newline (`\n`) is printed to cleanly end the animation.

---

## Run It

Make sure you're in the project folder, then run:

```bash
node spinner2.js

You’ll see the spinner animate in your terminal!

To try the original version:

node spinner1.js


Created by @murray-pocha