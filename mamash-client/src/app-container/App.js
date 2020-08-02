import React, { useState } from 'react';
import { AppBar, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  withRouter
} from "react-router-dom";
import RoleSelection from '../role-selection';
import BlackTheme from '../themes/black-theme';
import BlueTheme from '../themes/blue-theme';
import GreenTheme from '../themes/green-theme';
import PurpuleTheme from '../themes/purple-theme';
import { ROLES_NAMES, ROLES } from '../global';

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

const roleToTheme = {
  [ROLES_NAMES.NORMAL]: GreenTheme,
  [ROLES_NAMES.MAMASH]: BlueTheme,
  [ROLES_NAMES.SAMAP]: PurpuleTheme
}

function App({ history }) {

  const classes = useStyles();

  const getThemeByPathName = (pathName) => {
    let theme = BlackTheme;
    ROLES.forEach(role => {
      if(pathName.includes(role.englishName)){
        theme = roleToTheme[role.englishName];
      }
    });

    return theme;
  }

  const [theme, setTheme] = useState(getThemeByPathName(window.location.pathname));

  history.listen((location, action) => {
    const themeToUpdate = getThemeByPathName(window.location.pathname);

    setTheme(themeToUpdate);
  });

  const onAppBarClick = () => {
    history.push(`/`);
  }

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
            <Button onClick={onAppBarClick}>
              <div style={{
                fontSize: '20px',
                color: theme.palette.secondary.main,
                width: 'fit-content',
                textDecoration: 'none',
              }}>{'מערכת בדיקת נוכחות'}</div>
            </Button>
          </AppBar>
          <RoleSelection setTheme={setTheme} />
        </div>
      </ThemeProvider>
  );
}

export default withRouter(App);
