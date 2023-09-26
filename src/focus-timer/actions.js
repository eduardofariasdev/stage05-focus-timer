import state from './state.js';
import * as sounds from './sounds.js';
import * as elements from './elements.js';
import * as timer from './timer.js';

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle('running');

  timer.countdown();
  sounds.buttonPress.play();
}

export function reset() {
  state.isRunnig = false;
  document.documentElement.classList.remove('running');

  timer.updateDisplay();
}

export function increase() {
  if (Number(elements.minutes.textContent) + 5 > 25) {
    timer.updateDisplay(25, 0);
    return;
  }

  timer.updateDisplay(Number(elements.minutes.textContent) + 5, 0);
}

export function decrease() {
  if (Number(elements.minutes.textContent) - 5 < 0) {
    timer.updateDisplay(0, 0);
    return;
  }

  timer.updateDisplay(Number(elements.minutes.textContent) - 5, 0);
}

export function playSound(action) {
  if (action !== state.whatIsPlaying) {
    document.documentElement.classList.replace(state.whatIsPlaying, action);
    state.whatIsPlaying = action;
    sounds.changeBgSound(`./assets/${action}.wav`);
    sounds.bgSound.play();
    return;
  }

  document.documentElement.classList.replace(state.whatIsPlaying, 'sound-off');
  state.whatIsPlaying = 'sound-off';
  sounds.bgSound.pause();
}
