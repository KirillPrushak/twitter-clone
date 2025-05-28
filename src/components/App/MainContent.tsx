import styles from './app.module.css';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import image from '../Avatar/man.png';
import TweetComposer from './TweetComposer';
import IconComment from '../../assets/icons/IconComment';
import IconRetweet from '../../assets/icons/IconRetweet';
import IconLike from '../../assets/icons/IconLike';
import IconShare from '../../assets/icons/IconShare';

function TimelineTweet() {
  return (
    <div className="flex pa3">
      <div className="mr3">
        <Avatar />
      </div>

      <div className="flex flex-column flex-auto">
        <div className="flex items-center mb2">
          <b className="mr2">Anton Bavaj</b>
          <span>Bacaj</span>
          <span className="f7 mh2">·</span>
          <span>24m</span>
        </div>

        <p className="ma0 mb2">Tweet text</p>

        <div
          className={classNames('flex justify-between', styles.timelineToolBar)}
        >
          <button className="btn flex pa0 items-center f7">
            <IconComment className="w125 h125 pa2 br-100 mr1" />
            <span>10</span>
          </button>
          <button className="btn flex pa0 items-center f7">
            <IconRetweet className="w125 h125 pa2 br-100 mr1" />
            <span>10</span>
          </button>
          <button className="btn flex pa0 items-center f7">
            <IconLike className="w125 h125 pa2 br-100 mr1" />
            <span>10</span>
          </button>
          <button className="btn flex pa0 mr5 items-center f7">
            <IconShare className="w125 h125 pa2 br-100 mr1" />
            <span>10</span>
          </button>
        </div>
      </div>
    </div>
  );
}
function MainContent() {
  return (
    <div className={classNames(styles.mainContent)}>
      <div className={classNames('ph3 pb3', styles.tweetComposer)}>
        <h3>Latest tweets</h3>
        <div className="flex">
          <div className="mr3">
            <Avatar src={image} />
          </div>
          <TweetComposer />
        </div>
      </div>

      <TimelineTweet />
    </div>
  );
}
export default MainContent;
