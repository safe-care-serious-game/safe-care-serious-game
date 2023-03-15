import { createContext } from "react";
import click from "../../audios/click.mp3";
import confirmation from "../../audios/confirmation.mp3";
import error from "../../audios/error.mp3";
import finish from "../../audios/finish.mp3";

const clickAudio = new Audio(click);
const confirmationAudio = new Audio(confirmation);
const errorAudio = new Audio(error);
const finishAudio = new Audio(finish);

const AudioContext = createContext({
  clickAudio,
  confirmationAudio,
  errorAudio,
  finishAudio,
});

export default AudioContext;
