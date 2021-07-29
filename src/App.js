import Level from './components/level/Level';
import Levels from './components/levels/Levels';
import MainMenu from './components/main-menu/MainMenu';
import SplashScreen from './components/splash-screen/SplashScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <MainMenu />
        </Route>
        <Route path="/levels/:levelId">
          <Level />
        </Route>
        <Route path="/levels">
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
