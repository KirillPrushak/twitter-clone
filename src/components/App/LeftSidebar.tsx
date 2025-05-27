import { Link } from 'react-router';
import Logo from '../../assets/icons/Logo';
import IconHome from '../../assets/icons/IconHome';
import IconHashtag from '../../assets/icons/IconHashtag';
import IconCommunities from '../../assets/icons/IconCommunities';
import IconNotofications from '../../assets/icons/IconNotifications';
import IconMessages from '../../assets/icons/IconMessages';
import IconBookmarks from '../../assets/icons/IconBookmarks';
import IconProfile from '../../assets/icons/IconProfile';
import IconMore from '../../assets/icons/IconMore';
import styles from './app.module.css';
import classNames from 'classnames';

function LeftSidebar() {
  return (
    <div className={styles.leftSidebar}>
      <div
        className={classNames(
          'flex flex-column items-start fixed overflow-auto h-100',
          styles.leftSidebar
        )}
      >
        <Link className="pa2" to="/">
          <Logo />
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconHome className="w15 h15 mr2" />
            Home
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconHashtag className="w15 h15 mr2" />
            Explore
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconCommunities className="w15 h15 mr2" />
            Communities
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconNotofications className="w15 h15 mr2" />
            Notifications
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconMessages className="w15 h15 mr2" />
            Messages
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconBookmarks className="w15 h15 mr2" />
            Bookmarks
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconProfile className="w15 h15 mr2" />
            Profile
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconMore className="w15 h15 mr2" />
            More
          </div>
        </Link>
        <button className="btn btn-primary b ph4 pv3 br-pill w-80">
          Tweet
        </button>
      </div>
    </div>
  );
}

export default LeftSidebar;
