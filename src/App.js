import GameGoal from "./components/game-goal/GameGoal";
import GameMode from "./components/game-mode/GameMode";
import KnowMore from "./components/know-more/KnowMore";
import Level from "./components/level/Level";
import Levels from "./components/levels/Levels";
import MainMenu from "./components/main-menu/MainMenu";
import SplashScreen from "./components/splash-screen/SplashScreen";
import SupportingMaterials from "./components/supporting-materials/SupportingMaterials";
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
