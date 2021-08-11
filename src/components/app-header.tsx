import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from '../styles/components.module.css';
import AppDrawer from './app-drawer';

export default function AppHeader(): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
        <AppDrawer></AppDrawer>

        <Typography variant="h5" className={styles['h-title']}>
          <Link href="/">Ryohei KOMATSUYAMA</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
