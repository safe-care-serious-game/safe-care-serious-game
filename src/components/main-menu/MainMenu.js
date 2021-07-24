import Logo from '../logo/Logo';
import Card from '../card/Card';
import './MainMenu.css';
import Play from '../../images/Play.png'
import KnowMore from '../../images/KnowMore.png'
import { useHistory } from 'react-router-dom';

function MainMenu() {
  const history = useHistory();

  return (
    <div className="Main-Menu">
      <div className="Main-Menu-Logo-Wrapper">
        <Logo />
      </div>
      <div className="Main-Menu-Options">
        <Card image={Play} title="Jogar" onClick={() => history.push('/levels')} />
        <Card image={KnowMore} title="Saiba Mais" />
      </div>
    </div>
  );
}

export default MainMenu;
