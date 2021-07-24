import { useHistory } from 'react-router-dom';
import Logo from '../logo/Logo';
import './SplashScreen.css';

function SplashScreen() {
  const history = useHistory();

  return (
    <div className="Splash-Screen" onClick={() => history.replace('/menu')}>
      <div className="Splash-Screen-Logo-Wrapper">
        <Logo/>
      </div>
      <h1 className="Splash-Screen-Press-To-Start">Clique para começar</h1>
    </div>
  );
}

export default SplashScreen;
