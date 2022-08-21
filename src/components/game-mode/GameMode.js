import Logo from '../logo/Logo';
import Card from '../card/Card';
import css from './GameMode.module.css';
import SinglePlayer from '../../images/SinglePlayer.png'
import MultiPlayer from '../../images/MultiPlayer.png'
import { useHistory } from 'react-router-dom';

function GameMode() {
  const history = useHistory();

  return (
    <div className={css.gameMode}>
      <div className={css.gameModeLogoWrapper}>
        <Logo small />
      </div>
      <div className={css.gameModeOptions}>
        <Card image={SinglePlayer} title="Single Player" onClick={() => history.push('/single-player/levels')} />
        <Card image={MultiPlayer} title="Multi Player" onClick={() => history.push('/multi-player/levels')} />
      </div>
    </div>
  );
}

export default GameMode;
