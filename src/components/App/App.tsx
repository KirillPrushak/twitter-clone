import styles from './app.module.css';
import classNames from 'classnames';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div className={classNames('flex center min-vh-100', styles.container)}>
      <LeftSidebar />
      <MainContent />
      <div className="right">Right</div>
    </div>
  );
}

export default App;
