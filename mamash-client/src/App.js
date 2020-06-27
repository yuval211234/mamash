import React, { useEffect, useState } from 'react';
import { AppBar, ThemeProvider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";
import RoleSelection from './role-selection';
import BlackTheme from './black-theme';
import BlueTheme from './blue-theme';
import GreenTheme from './green-theme';
import { MuiThemeProvider } from 'material-ui/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: '100vh',
    direction: 'rtl',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

function App({ history }) {

  const classes = useStyles();

  const [theme, setTheme] = useState(window.location.pathname.includes('mamash')? BlueTheme: window.location.pathname.includes('normal')? GreenTheme : BlackTheme);

  history.listen((location, action) => {
    let themeToUpdate = BlackTheme;
    if(location.pathname.includes('mamash')){
      themeToUpdate = BlueTheme;
    }
    else if(location.pathname.includes('normal')){
      themeToUpdate = GreenTheme;
    }

    setTheme(themeToUpdate);
  });

  return (
      <ThemeProvider theme={theme}>
        <div className={classes.background}>
          <AppBar style={{
            display: 'flex',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            padding: '20px',
            position: 'relative',
            height: '80px'
          }}>
            <Button>
              <Link to="/" style={{
                fontSize: '20px',
                color: theme.palette.secondary.main,
                width: 'fit-content',
                textDecoration: 'none',
              }}>{'מערכת בדיקת נוכחות'}</Link>
            </Button>
          </AppBar>
          <RoleSelection setTheme={setTheme} />
        </div>
      </ThemeProvider>
  );
}

export default withRouter(App);
