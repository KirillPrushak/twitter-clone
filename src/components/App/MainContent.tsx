import styles from './app.module.css';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import image from '../Avatar/man.png';

function MainContent() {
  return (
    <div className={classNames(styles.mainContent, 'ph3')}>
      <h3>Latest tweets</h3>
      <div className="flex">
        <div className="mr3">
          <Avatar src={image} />
        </div>
        <textarea
          className={classNames('w-100 f4', styles.tweetArea)}
          placeholder={"What's happening?"}
        />
      </div>
    </div>
  );
}
export default MainContent;
