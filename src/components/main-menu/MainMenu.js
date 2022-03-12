import Logo from '../logo/Logo';
import Card from '../card/Card';
import css from './MainMenu.module.css';
import Play from '../../images/Play.png'
import KnowMore from '../../images/KnowMore.png'
import { useHistory } from 'react-router-dom';

function MainMenu() {
  const history = useHistory();

  return (
    <div className={css.mainMenu}>
      <div className={css.mainMenuLogoWrapper}>
        <Logo small />
      </div>
      <div className={css.mainMenuOptions}>
        <Card image={Play} title="Jogar" onClick={() => history.push('/levels')} />
        <Card image={KnowMore} title="Saiba Mais" />
      </div>
    </div>
  );
}

export default MainMenu;
