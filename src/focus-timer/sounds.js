export const buttonPress = new Audio('./assets/button-press.wav');

export const kitchenTimer = new Audio('./assets/kitchen-timer.mp3');

export const bgSound = new Audio();

export function changeBgSound(url) {
  bgSound.src = url;
}

bgSound.loop = true;
