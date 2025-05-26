import { Link } from 'react-router';
import Logo from '../../assets/icons/Logo';

function LeftSidebar() {
  return (
    <div className="flex flex-column items-start">
      <Link className="pa2" to="/">
        <Logo />
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Home
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Explore
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Communities
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Notifications
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Messages
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Bookmarks
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        Profile
      </Link>
      <Link className="btn f4 ph4 pv3 br-pill mb2" to="/">
        More
      </Link>
      <button className="btn btn-primary b ph4 pv3 br-pill w-100">Tweet</button>
    </div>
  );
}

export default LeftSidebar;
