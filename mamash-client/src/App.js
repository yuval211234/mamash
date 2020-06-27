import React, { useEffect, useState } from 'react';
import PLUGOT from './plugot/index';
import { AppBar, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '20px',
    position: 'relative',
    height: '80px'
  },
  background: {
    minHeight: '100vh',
    direction: 'rtl',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '20px',
    color: theme.palette.secondary.main,
    width: 'fit-content'
  }
}));

function App() {

  const classes = useStyles();
  const [isHome, setIsHome] = useState(true);

  const onAppBarClick = () => {
    setIsHome(true);
  }

  const setNotHome = () => {
    setIsHome(false);
  }

  return (
    <div className={classes.background}>
      <AppBar className={classes.appBar}>
        <Button className={classes.title} onClick={onAppBarClick}>{'מערכת בדיקת נוכחות'}</Button>
      </AppBar>
      <PLUGOT isHome={isHome} setNotHome={setNotHome}/>
    </div>
  );
}

export default App;
