import styles from './app.module.css';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import image from '../Avatar/man.png';
import TweetComposer from './TweetComposer';
import Timeline from './Timeline';
import TimelineContainer from './Timeline';

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

      <TimelineContainer />
    </div>
  );
}
export default MainContent;
