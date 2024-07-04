import { memo, useEffect } from 'react';
import s from './Home.module.scss';
interface props {}

function Home({}: props) {
  useEffect(() => {
    console.log('Mount Home page.');
    return () => console.log('Unmount Home page.');
  }, []);

  return <div className={s.Home}>Home component</div>;
}

export default memo(Home);
