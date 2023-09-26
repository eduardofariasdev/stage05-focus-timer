import state from './state.js';
import * as elements from './elements.js';
import * as actions from './actions.js';

export function registerControls() {
  elements.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != 'function') {
      return;
    }

    actions[action]();
  });
}

export function registerSoundsButtons() {
  elements.soundsButtons.addEventListener('click', (event) => {
    const action = event.target.dataset.action;

    actions.playSound(action);
  });
}
