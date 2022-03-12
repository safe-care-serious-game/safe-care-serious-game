import Button from '../button/Button'
import LevelDialogue from '../level-dialogue/LevelDialogue'
import LevelEnd from '../level-end/LevelEnd'
import LevelOptions from '../level-options/LevelOptions'
import LevelToolbar from '../level-toolbar/LevelToolbar'
import data from '../../data'
import css from './Level.module.css';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Level() {
    const history = useHistory();
    let { levelId } = useParams();

    const [levelData, setLevelData] = useState([]);
    const [levelDataIndex, setLevelDataIndex] = useState(-1);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);
    const [score, setScore] = useState(0);
    const [shot, setShot] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [dialogue, setDialogue] = useState('');
    const [transitionText, setTransitionText] = useState('');
    const [options, setOptions] = useState([]);
    const [levelSubject, setLevelSubject] = useState('');

    const transitionTextStyle = {
        display: transitionText ? 'block' : 'none'
    };

    const optionsStyle = {
        display: options && options.length !== 0 ? 'block' : 'none'
    };

    const dialogueStyle = {
        display: options && options.length !== 0 ? 'none' : 'block'
    };

    useEffect(() => {
        setLevelData([...data[levelId]]);
    }, [levelId]);

    useEffect(() => {
        setLevelDataIndex(0);
    }, [levelData]);

    useEffect(() => {
        if (!levelData || Object.keys(levelData).length === 0 || levelData.length === 0) {
            return;
        }

        // Previous/next
        setHasPrevious(levelDataIndex !== 0);
        setHasNext(levelDataIndex + 1 < data[levelId].length);

        // Other data
        setShot(levelData[levelDataIndex].shot ? levelData[levelDataIndex].shot : '');
        setCharacterName(levelData[levelDataIndex].characterName ? levelData[levelDataIndex].characterName : '');
        setDialogue(levelData[levelDataIndex].dialogue ? levelData[levelDataIndex].dialogue : '');
        setTransitionText(levelData[levelDataIndex].transitionText ? levelData[levelDataIndex].transitionText : '');
        setOptions(levelData[levelDataIndex].options ? [...levelData[levelDataIndex].options] : [...[]]);
        setLevelSubject(levelData[levelDataIndex].levelSubject ? levelData[levelDataIndex].levelSubject : '');
    }, [levelId, levelData, levelDataIndex]);

    useEffect(() => {
        //console.log('shot hook', shot);
        document.querySelector('video').play();
    }, [shot])

    function previous() {
        if (!hasPrevious) {
            return;
        }
        setLevelDataIndex(levelDataIndex - 1);
    }

    function next() {
        if (!hasNext) {
            return;
        }
        setLevelDataIndex(levelDataIndex + 1);
    }

    function end() {
        document.querySelector('#optionsWrapper').style.display = 'none';
        document.querySelector('#transitionText').style.display = 'none';
        document.querySelector('#dialogueWrapper').style.display = 'none';
        document.querySelector('#endWrapper').style.display = 'block';
    }

    function selectOption(option) {
        if (option.correct) {
            setScore(score + option.score);
        }
        next();
    }

    const listOptions = options.map((option, index) =>
        <Button key={index} className={css.levelUIOptionItem} onClick={() => selectOption(option)}>
            {option.dialogue}
        </Button>
    );

    return (
        <div className={css.level}>
            <video className={css.levelVideo} src={shot}></video>
            <div className={css.levelUI}>
                <LevelToolbar>
                    <span className={css.levelToolbarScore}>{score}</span>
                    <Button className={css.levelToolbarButton} onClick={() => history.replace('/levels')}>Sair</Button>
                </LevelToolbar>

                <p id="transitionText" className={css.levelUITransitionText} style={transitionTextStyle}>{transitionText}</p>

                <div id="optionsWrapper" style={optionsStyle}>
                    <LevelOptions options={options} dialogue={dialogue} levelSubject={levelSubject} style={optionsStyle}>
                        {listOptions}
                    </LevelOptions>
                </div>

                <div id="endWrapper" className={css.levelUIEndWrapper}>
                    <LevelEnd levelId={levelId} score={score} />
                </div>

                <div id="dialogueWrapper" style={dialogueStyle}>
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
        </div>
    );
}

export default Level;
