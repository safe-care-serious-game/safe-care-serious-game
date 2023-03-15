import GameGoal from "./components/game-goal/GameGoal";
import GameMode from "./components/game-mode/GameMode";
import KnowMore from "./components/know-more/KnowMore";
import Level from "./components/level/Level";
import Levels from "./components/levels/Levels";
import MainMenu from "./components/main-menu/MainMenu";
import PlayerContext, {
  defaultPlayerData,
  loadPlayerDataFromLocalStorage,
  savePlayerDataIntoLocalStorage,
} from "./components/player-context/PlayerContext";
import SplashScreen from "./components/splash-screen/SplashScreen";
import SupportingMaterials from "./components/supporting-materials/SupportingMaterials";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [playerData, setPlayerData] = useState(defaultPlayerData);

  useEffect(() => {
    const parsedStoredPlayerData = loadPlayerDataFromLocalStorage();

    if (!parsedStoredPlayerData) {
      return;
    }

    setPlayerData(parsedStoredPlayerData);
  }, []);

  const saveHighScore = (levelId, score) => {
    const currentLevelHighScore = playerData.levels[levelId].highScore;

    if (currentLevelHighScore && currentLevelHighScore > score) {
      // Player's score is not the high score for this level
      return;
    }

    const newPlayerData = {
      ...playerData,
    };
    newPlayerData.levels[levelId].highScore = score;

    // Persist high score
    savePlayerDataIntoLocalStorage(newPlayerData);

    setPlayerData(newPlayerData);
  };

  return (
    <PlayerContext.Provider value={playerData}>
      <Router>
        <Switch>
          <Route path="/menu">
            <MainMenu />
          </Route>
          <Route path="/game-mode">
            <GameMode />
          </Route>
          <Route path="/know-more">
            <KnowMore />
          </Route>
          <Route path="/game-goal">
            <GameGoal />
          </Route>
          <Route path="/supporting-materials">
            <SupportingMaterials />
          </Route>
          <Route path="/:gameMode/levels/:levelId">
            <Level saveHighScore={saveHighScore} />
          </Route>
          <Route path="/:gameMode/levels">
            <Levels />
          </Route>
          <Route path="/">
            <SplashScreen />
          </Route>
        </Switch>
      </Router>
    </PlayerContext.Provider>
  );
}

export default App;
