import IconComment from '../../assets/icons/IconComment';
import IconRetweet from '../../assets/icons/IconRetweet';
import IconLike from '../../assets/icons/IconLike';
import IconShare from '../../assets/icons/IconShare';
import { Link } from 'react-router';
import { Tweet } from '../../core/types';
import { format } from 'path';
import formatTimelineTweet from '../../core/utils';
import Avatar from '../Avatar/Avatar';
import styles from './app.module.css';
import classNames from 'classnames';
import Loader from '../Loader/Loader';

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

function TimelineContainer() {
  const loading = false;
  const tweets: Array<Tweet> = [];

  if (loading) {
    return (
      <div className="flex justify-center flex-auto mv4">
        <Loader />
      </div>
    );
  }

  if (tweets.length === 0) {
    return <p className="tc f4 b mv4">No tweets yet...</p>;
  }
  return <Timeline tweets={[]} />;
}

export default TimelineContainer;
