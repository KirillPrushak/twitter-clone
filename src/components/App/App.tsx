import styles from './app.module.css';
import classNames from 'classnames';
import LeftSidebar from './LeftSidebar';

function App() {
  return (
    <div className={classNames('flex center', styles.container)}>
      <LeftSidebar />
      <div className="center">Center</div>
      <div className="right">Right</div>
    </div>
  );
}

export default App;
