import Logo from '../logo/Logo';
import Card from '../card/Card';
import FooterToolbar from '../footer-toolbar/FooterToolbar';
import './Levels.css';
import Level1 from '../../images/Level1.png'
import Level2 from '../../images/Level2.png'
import Level3 from '../../images/Level3.png'
import Level4 from '../../images/Level4.png'
import Level5 from '../../images/Level5.png'
import Level6 from '../../images/Level6.png'
import { useHistory } from 'react-router-dom';

function Levels() {
  const history = useHistory();

  return (
    <div className="Levels">
      <div className="Levels-Logo-Wrapper">
        <Logo />
      </div>
      
      <h1 className="Levels-Title">Fases</h1>

      <div className="Levels-List">
        <Card image={Level1} title="Identificação do Paciente" />
        <Card image={Level2} title="Cirurgia Segura" />
        <Card image={Level3} title="Segurança na administração de mediacamentos" />
        <Card image={Level4} title="Prevenção de Lesão por pressão" />
        <Card image={Level5} title="Prevenção de Quedas" />
        <Card image={Level6} title="Higienização das mãos" />
      </div>

      <FooterToolbar>
        <button onClick={() => history.goBack()}>Voltar</button>
        <button>Login</button>
      </FooterToolbar>
    </div>
  );
}

export default Levels;
