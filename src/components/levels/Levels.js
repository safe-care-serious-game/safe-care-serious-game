import Logo from '../logo/Logo';
import Card from '../card/Card';
import './Levels.css';
import Level1 from '../../images/Level1.png'
import Level2 from '../../images/Level2.png'
import Level3 from '../../images/Level3.png'
import Level4 from '../../images/Level4.png'
import Level5 from '../../images/Level5.png'
import Level6 from '../../images/Level6.png'

function Levels() {
  return (
    <div className="Levels">
      <div className="Levels-Logo-Wrapper">
        <Logo />
      </div>
      
      <h1>Fases</h1>
      <Card image={Level1} title="Fase 1" />
      <Card image={Level2} title="Fase 2" />
      <Card image={Level3} title="Fase 3" />
      <Card image={Level4} title="Fase 3" />
      <Card image={Level5} title="Fase 5" />
      <Card image={Level6} title="Fase 6" />
    </div>
  );
}

export default Levels;
