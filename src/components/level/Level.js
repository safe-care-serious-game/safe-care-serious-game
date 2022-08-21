import Button from '../button/Button'
import LevelDialogue from '../level-dialogue/LevelDialogue'
import LevelEnd from '../level-end/LevelEnd'
import LevelOptions from '../level-options/LevelOptions'
import LevelToolbar from '../level-toolbar/LevelToolbar'
import data from '../../data'
import css from './Level.module.css';
import { useHistory, useParams } from 'react-router-dom';
import { createRef, useEffect, useState } from 'react';
import isEqual from 'lodash.isequal';

function Level() {
    const history = useHistory();
    const { levelId } = useParams();

    const [levelData, setLevelData] = useState([]);
    const [levelDataIndex, setLevelDataIndex] = useState(-1);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);
    const [score, setScore] = useState(0);
    const [shots, setShots] = useState([]);
    const [characterName, setCharacterName] = useState('');
    const [dialogue, setDialogue] = useState('');
    const [transitionText, setTransitionText] = useState('');
    const [options, setOptions] = useState([]);
    const [levelSubject, setLevelSubject] = useState('');
    const videoRef = createRef();

    const shouldRenderTransitionText = () => transitionText && !hasEnded

    const shouldRenderOptions = () => options.length !== 0 && !hasEnded

    const shouldRenderLevelEnd = () => hasEnded

    const shouldRenderDialog = () => options.length === 0 && !hasEnded

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
        setHasPrevious(levelDataIndex !== 0 && levelData[levelDataIndex - 1].options === undefined);
        setHasNext(levelDataIndex + 1 < data[levelId].length);

        // Other data
        if (!levelData[levelDataIndex].shots) {
            setShots([...[]]);
        } else if (!isEqual(levelData[levelDataIndex].shots, shots)) {
            setShots([...levelData[levelDataIndex].shots]);
        }
        setCharacterName(levelData[levelDataIndex].characterName ? levelData[levelDataIndex].characterName : '');
        setDialogue(levelData[levelDataIndex].dialogue ? levelData[levelDataIndex].dialogue : '');
        setTransitionText(levelData[levelDataIndex].transitionText ? levelData[levelDataIndex].transitionText : '');
        setOptions(levelData[levelDataIndex].options ? [...levelData[levelDataIndex].options] : [...[]]);
        setLevelSubject(levelData[levelDataIndex].levelSubject ? levelData[levelDataIndex].levelSubject : '');
    }, [levelId, levelData, levelDataIndex, shots]);

    useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        // Abort current playback
        videoRef.current.src = '';
        videoRef.current.load();

        // Start new playback
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
        let playbackPromise = videoRef.current.play();
        if (playbackPromise) {
            playbackPromise
                .catch(() => /* Capture exception to avoid flooding the logs */ {})
        }
    }, [shots, videoRef])

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
        setHasEnded(true);
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
            <video className={css.levelVideo} ref={videoRef}>
                {shots.map((shot) =>
                    <source key={shot.id} src={shot.src} type={shot.type} />
                )}
            </video>
            <div className={css.levelUI}>
                <LevelToolbar>
                    <span className={css.levelToolbarScore}>{score}</span>
                    <Button className={css.levelToolbarButton} onClick={() => history.replace('/levels')}>Sair</Button>
                </LevelToolbar>

                {shouldRenderTransitionText() && 
                    <p className={css.levelUITransitionText}>
                        {transitionText}
                    </p>
                }

                {shouldRenderOptions() &&
                    <LevelOptions options={options} dialogue={dialogue} levelSubject={levelSubject}>
                        {listOptions}
                    </LevelOptions>
                }

                {shouldRenderLevelEnd() &&
                    <LevelEnd levelId={levelId} score={score} />
                }

                {shouldRenderDialog() &&
                    <LevelDialogue
                        characterName={characterName}
                        dialogue={dialogue}
                        hasPrevious={hasPrevious}
                        onPrevious={() => previous()}
                        hasNext={hasNext}
                        onNext={() => next()}
                        onEnd={() => end()} />
                }
            </div>
        </div>
    );
}

export default Level;
