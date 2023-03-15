import { createContext } from "react";
import click from "../../audios/click.mp3";
import confirmation from "../../audios/confirmation.mp3";
import error from "../../audios/error.mp3";
import finish from "../../audios/finish.mp3";
import level1 from "../../audios/level1.mp3";
import level2 from "../../audios/level2.mp3";
import level3 from "../../audios/level3.mp3";
import level4 from "../../audios/level4.mp3";
import level5 from "../../audios/level5.mp3";
import level6 from "../../audios/level6.mp3";
import menu from "../../audios/menu.mp3";

const clickAudio = new Audio(click);
const confirmationAudio = new Audio(confirmation);
const errorAudio = new Audio(error);
const finishAudio = new Audio(finish);
const level1Music = new Audio(level1);
const level2Music = new Audio(level2);
const level3Music = new Audio(level3);
const level4Music = new Audio(level4);
const level5Music = new Audio(level5);
const level6Music = new Audio(level6);
const menuMusic = new Audio(menu);

const AudioContext = createContext({
  clickAudio,
  confirmationAudio,
  errorAudio,
  finishAudio,
  levels: {
    1: {
      music: level1Music,
    },
    2: {
      music: level2Music,
    },
    3: {
      music: level3Music,
    },
    4: {
      music: level4Music,
    },
    5: {
      music: level5Music,
    },
    6: {
      music: level6Music,
    },
  },
  menuMusic,
});

export default AudioContext;
