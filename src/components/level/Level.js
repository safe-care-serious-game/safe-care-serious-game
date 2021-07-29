import LevelToolbar from '../level-toolbar/LevelToolbar'
import LevelDialogue from '../level-dialogue/LevelDialogue'
import Level4Shot1 from '../../videos/level4/Level4Shot1.mp4'
import Level4Shot2 from '../../videos/level4/Level4Shot2.mp4'
import Level4Shot3 from '../../videos/level4/Level4Shot3.mp4'
import Level4Shot4 from '../../videos/level4/Level4Shot4.mp4'
import Level4Shot5 from '../../videos/level4/Level4Shot5.mp4'
import Level4Shot6 from '../../videos/level4/Level4Shot6.mp4'
import Level4Shot7 from '../../videos/level4/Level4Shot7.mp4'
import Level4Shot8 from '../../videos/level4/Level4Shot8.mp4'
import Level4Shot9 from '../../videos/level4/Level4Shot9.mp4'
import Level4Shot10 from '../../videos/level4/Level4Shot10.mp4'
import Level4Shot11 from '../../videos/level4/Level4Shot11.mp4'
import Level4Shot12 from '../../videos/level4/Level4Shot12.mp4'
import Level4Shot13 from '../../videos/level4/Level4Shot13.mp4'
import Level4Shot14 from '../../videos/level4/Level4Shot14.mp4'
import Level4Shot15 from '../../videos/level4/Level4Shot15.mp4'
import './Level.css';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const data = {
    "4": [
        {
            characterName: 'Enfermeira Florence Nightingale',
            dialogue: 'Bom dia Waldo, tudo bem? Queria conversar com você sobre o paciente do 303C.',
            shot: Level4Shot1
        },
        {
            characterName: 'Florence',
            dialogue: 'Eu e o Hipócrates constatamos que o paciente do 303C, o senhor Oswaldo Cruz, teve piora no seu estado respiratório nos últimos três dias. Ele está ficando por um período maior de tempo restrito ao leito.',
            shot: Level4Shot2
        },
        {
            characterName: 'Florence',
            dialogue: 'Nas últimas 24 horas, não houve relato nem pela equipe de efermagem nem pelo próprio paciente ou seu cuidador que esse paciente tenha deambulado. Estou começando a ficar preocupada. Você conhece os riscos de um paciente restrito ao leito?',
            shot: Level4Shot3
        },
        {
            characterName: 'Fisioterapeuta Waldo de Moraes',
            dialogue: '...',
            shot: Level4Shot4
        },
        {
            characterName: 'Florence',
            dialogue: 'Fico feliz que você entende esses riscos. Quais estratégias você sugere para que esse paciente possa melhorar seu estado respiratório e evitar esses riscos, principalmente o desenvolvimento de LPP?',
            shot: Level4Shot5
        },
        {
            characterName: 'Waldo',
            dialogue: 'Florence, a Orem me informou que esse paciente já está recebendo os cuidados para previnir LPP. Quais cuidados vocês estão realizando?',
            shot: Level4Shot6
        },
        {
            characterName: 'Florence',
            dialogue: '...',
            shot: Level4Shot7
        },
        {
            characterName: 'Waldo',
            dialogue: 'Florence, acredito que os cuidados que vocês estão realizando são excelentes. Mas vamos avaliar o paciente e ver o que mais podemos definir para melhorar seu estado de saúde e previnir possíveis complicações.',
            shot: Level4Shot8
        },
        {
            characterName: '',
            dialogue: '',
            shot: Level4Shot9
        },
        {
            characterName: 'Florence',
            dialogue: 'Bom dia senhor Oswaldo, como o senhor está se sentindo hoje?',
            shot: Level4Shot10
        },
        {
            characterName: 'Oswaldo Cruz',
            dialogue: 'Bom dia enfermeira, estou do mesmo jeito, sem conseguir respirar direito.',
            shot: Level4Shot11
        },
        {
            characterName: 'Florence',
            dialogue: 'O que o senhor tem feito durante o dia?',
            shot: Level4Shot12
        },
        {
            characterName: 'Oswaldo Cruz',
            dialogue: 'Estou passando o dia inteiro deitado aqui. Ontem tentei caminhar, mas não consegui. Pela manhã me colocaram na poltrona, não fiquei cinco minutos, e ainda senti falta de ar.',
            shot: Level4Shot13
        },
        {
            characterName: 'Waldo',
            dialogue: 'Entendo sua situação. O senhor sabe que é importante que caminhe e se movimente para ajudar na sua recuperação e assim poder ter alta mais rápido.',
            shot: Level4Shot14
        },
        {
            characterName: 'Waldo',
            dialogue: 'Vamos examinar o senhor, para que possamos ver como melhorar sua condição respiratória e assim sair desse leito.',
            shot: Level4Shot15
        },
        {
            characterName: 'Florence',
            dialogue: 'Irei reforçar diariamente a avaliação da pele, a utilização da escala de Braden e a inspeção da presença de edemas com a equipe de enfermagem.',
            shot: Level4Shot5
        },
        {
            characterName: 'Florence',
            dialogue: 'Também irei prescrever a utilização de solução hidratante seis vezes ao dia nas proeminências ósseas.',
            shot: Level4Shot3
        },
        {
            characterName: 'Waldo',
            dialogue: 'Vou prescrever uma rotina de fisioterapia motora para mobilizar o paciente no leito modificação seu decúbito, bem como o trabalho de fisioterapia respiratória para melhorar o padrão respeitório do paciente para conseguirmos retirá-lo do leito.',
            shot: Level4Shot6
        },
        {
            characterName: 'Florence',
            dialogue: 'Será prescrito mudança de decúbito a cada duas horas. E orientações ao paciente e seus cuidados sobre a importância dessas mudanças.',
            shot: Level4Shot2
        },
        {
            characterName: 'Florence',
            dialogue: 'Solicitarei uma avalição da nutricionista, a fim de promover o suporte nutricional adequado e avaliar o estado nutricional do paciente.',
            shot: Level4Shot3
        },
        {
            characterName: 'Florence',
            dialogue: 'Irei prescrever a utilização de coberturas adequadas nas áreas de proeminências ósseas.',
            shot: Level4Shot2
        },
        {
            characterName: 'Florence',
            dialogue: 'Irei prescrever a utilização de coxins para diminuir a pressão nas proeminências ósseas do paciente.',
            shot: Level4Shot3
        },
        {
            characterName: 'Florence',
            dialogue: 'Também irei prescrever a manutenção da cabeceira do leito do paciente em 45 graus para melhorar o seu estado respiratório e reduzir as chances de cisalhamento do paciente no leito.',
            shot: Level4Shot2
        },
        {
            characterName: 'Waldo',
            dialogue: 'Acredito que já consideramos importantes intervenções para realizar com o paciente Oswaldo. Vamos colocá-las em prática e reavaliar o paciente amanhã novamente.',
            shot: Level4Shot8
        },
        {
            characterName: 'Florence',
            dialogue: 'Certo Waldo.',
            shot: Level4Shot5
        }
    ]
}

function Level() {
    const history = useHistory();
    let { levelId } = useParams();
    const [levelDataIndex, setLevelDataIndex] = useState(0);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);
    const [shot, setShot] = useState('');
    const [score, setScore] = useState(0);
    const [characterName, setCharacterName] = useState('');
    const [dialogue, setDialogue] = useState('');

    useEffect(() => {
        if (!levelId) {
            return;
        }

        let d = data[levelId];
        setShot(d[levelDataIndex].shot)
        setCharacterName(d[levelDataIndex].characterName)
        setDialogue(d[levelDataIndex].dialogue)
        setHasPrevious(levelDataIndex != 0);
        setHasNext(levelDataIndex + 1 < data[levelId].length);

        document.querySelector('video').play();
    })

    function previous() {
        if (!hasPrevious) {
            return;
        }
        setLevelDataIndex(levelDataIndex - 1);
        setHasPrevious(levelDataIndex != 0);
    }

    function next() {
        if (!hasNext) {
            return;
        }
        setLevelDataIndex(levelDataIndex + 1);
        setHasNext(levelDataIndex + 1 < data[levelId].length);
    }

    function end() {
        // TODO: 
    }

    return (
        <div className="Level">
            <video className="Level-Video" src={shot}></video>
            <div className="Level-UI">
                <LevelToolbar>
                    <span>{score}</span>
                    <button onClick={() => history.replace('/levels')}>Sair</button>
                </LevelToolbar>

                <LevelDialogue
                    characterName={characterName}
                    dialogue={dialogue}
                    hasPrevious={hasPrevious}
                    onPrevious={() => previous()}
                    hasNext={hasNext}
                    onNext={() => next()}
                    onEnd={() => end()} />
            </div>
        </div>
    );
}

export default Level;
