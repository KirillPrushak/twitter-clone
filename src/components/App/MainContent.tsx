import styles from './app.module.css';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import image from '../Avatar/man.png';
import IconImage from '../../assets/icons/IconImage';
import IconGif from '../../assets/icons/IconGif';
import IconEmoji from '../../assets/icons/IconEmoji';
import IconLocation from '../../assets/icons/IconLocation';
import IconPoll from '../../assets/icons/IconPoll';
import IconShedule from '../../assets/icons/IconSchedule';
import { useState } from 'react';
import { isEmpty } from 'lodash';

function TweetAreaInput({ setText }: { setText: (text: string) => void }) {
  const adjustHeight = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget;
    element.style.height = '1px';
    element.style.height = 25 + element.scrollHeight + 'px';

    setText(element.value);
  };
  return (
    <textarea
      onInput={adjustHeight}
      className={classNames('w-100 f4', styles.tweetArea)}
      placeholder={"What's happening?"}
    />
  );
}

function Toolbar() {
  return (
    <div className={classNames('flex', styles.tweetToolbar)}>
      <button className="btn pa2 br-100 flex mr1">
        <IconImage className="w1125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconGif className="w1125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconPoll className="w1125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconEmoji className="w1125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconShedule className="w1125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconLocation className="w1125 h125" />
      </button>
    </div>
  );
}

function TweetArea() {
  const [text, setText] = useState('');

  return (
    <div className="flex-auto">
      <TweetAreaInput setText={setText} />
      <div className="flex justify-between items-center">
        <Toolbar />
        <button
          className={classNames('btn btn-primary b ph3 pv2 br-pill', {
            'o-50': isEmpty(text),
          })}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className={classNames(styles.mainContent, 'ph3')}>
      <h3>Latest tweets</h3>
      <div className="flex">
        <div className="mr3">
          <Avatar src={image} />
        </div>
        <TweetArea />
      </div>
    </div>
  );
}
export default MainContent;
