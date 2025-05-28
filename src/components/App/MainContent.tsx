import styles from './app.module.css';
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import image from '../Avatar/man.png';
import TweetComposer from './TweetComposer';
import IconComment from '../../assets/icons/IconComment';
import IconRetweet from '../../assets/icons/IconRetweet';
import IconLike from '../../assets/icons/IconLike';
import IconShare from '../../assets/icons/IconShare';
import { Link } from 'react-router';
import { Tweet } from '../../core/types';
import { format } from 'path';
import formatTimelineTweet from '../../core/utils';

function TimelineTweet({ tweet }: { tweet: Tweet }) {
  return (
    <div className={classNames('flex ph3 pt3 pb2', styles.timeLineTweet)}>
      <div className="mr3">
        <Avatar />
      </div>

      <div className="flex flex-column flex-auto">
        <div className="flex items-center mb2">
          <Link to="/" className="mr1">
            {tweet.name}
          </Link>
          <span className="color-gray">@{tweet.useName}</span>
          <span className="f8 mh1">•</span>
          <span className="color-gray-dark">
            {formatTimelineTweet(tweet.postedOn)}
          </span>
        </div>

        <p className="ma0 mb2">{tweet.text}</p>

        <div
          className={classNames('flex justify-between', styles.timelineToolBar)}
        >
          <button className="btn flex pa0 items-center f7">
            <IconComment className="w125 h125 pa2 br-100 mr1" />
            {tweet.reactions.comment > 0 ? (
              <span>{tweet.reactions.comment}</span>
            ) : null}
          </button>
          <button className="btn flex pa0 items-center f7">
            <IconRetweet className="w125 h125 pa2 br-100 mr1" />
            {tweet.reactions.retweet > 0 ? (
              <span>{tweet.reactions.retweet}</span>
            ) : null}
          </button>
          <button className="btn flex pa0 items-center f7">
            <IconLike className="w125 h125 pa2 br-100 mr1" />
            {tweet.reactions.like > 0 ? (
              <span>{tweet.reactions.like}</span>
            ) : null}
          </button>
          <button className="btn flex pa0 mr5 items-center f7">
            <IconShare className="w125 h125 pa2 br-100 mr1" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Timeline({ tweets }: { tweets: Array<Tweet> }) {
  return (
    <>
      {tweets.map((t, i) => (
        <TimelineTweet key={t.id} tweet={t} />
      ))}
    </>
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

      <Timeline
        tweets={[
          {
            id: '123',
            name: 'Anton Bacaj',
            postedOn: new Date(),
            text: 'Tweet text',
            useName: 'abacaj',
            reactions: {
              comment: 0,
              like: 0,
              retweet: 0,
            },
          },
          {
            id: '1234',
            name: 'Anton Bacaj',
            postedOn: new Date(),
            text: 'Tweet text',
            useName: 'abacaj',
            reactions: {
              comment: 0,
              like: 0,
              retweet: 0,
            },
          },
          {
            id: '12345',
            name: 'Anton Bacaj',
            postedOn: new Date(),
            text: 'Tweet text',
            useName: 'abacaj',
            reactions: {
              comment: 0,
              like: 0,
              retweet: 0,
            },
          },
        ]}
      />
    </div>
  );
}
export default MainContent;
