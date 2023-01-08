import GameMode from "./components/game-mode/GameMode";
import Level from "./components/level/Level";
import Levels from "./components/levels/Levels";
import MainMenu from "./components/main-menu/MainMenu";
import SplashScreen from "./components/splash-screen/SplashScreen";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <MainMenu />
        </Route>
        <Route path="/game-mode">
          <GameMode />
        </Route>
        <Route path="/:gameMode/levels/:levelId">
          <Level />
        </Route>
        <Route path="/:gameMode/levels">
          <Levels />
        </Route>
        <Route path="/">
          <SplashScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
