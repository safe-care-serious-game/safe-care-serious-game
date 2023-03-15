import { createContext } from "react";

export const defaultPlayerData = {
  levels: {
    1: {
      highScore: null,
    },
    2: {
      highScore: null,
    },
    3: {
      highScore: null,
    },
    4: {
      highScore: null,
    },
    5: {
      highScore: null,
    },
    6: {
      highScore: null,
    },
  },
};

export const loadPlayerDataFromLocalStorage = () => {
  if (!localStorage) {
    return null;
  }

  const storedPlayerData = localStorage.getItem("playerData");
  if (!storedPlayerData) {
    return null;
  }

  let parsedStoredPlayerData = null;

  try {
    parsedStoredPlayerData = JSON.parse(storedPlayerData);
  } catch (err) {
    // Player context data is corrupted
    localStorage.removeItem("playerData");
  }

  return parsedStoredPlayerData;
};

export const savePlayerDataIntoLocalStorage = (playerData) => {
  if (!localStorage) {
    return;
  }

  let playerDataAsString = null;

  try {
    playerDataAsString = JSON.stringify(playerData);
  } catch (err) {
    // Ignore error
    return;
  }

  localStorage.setItem("playerData", playerDataAsString);
};

const PlayerContext = createContext(defaultPlayerData);

export default PlayerContext;
