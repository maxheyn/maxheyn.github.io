import React from "react";
import { Route, Switch } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import './App.css';
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import PortfolioMain from './pages/PortfolioMain'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleSwitch from "@mui/material/Switch";
import CssBaseline from "@mui/material/CssBaseline";
import customLightTheme from './themes/lightTheme.json'
import customDarkTheme from './themes/darkTheme.json'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import config from './config.json'

const themeLight = createTheme(customLightTheme);
const themeDark = createTheme(customDarkTheme);

function App() {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <HashRouter basename="/">
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="light" sx={{ flexGrow: 1 }}>
                Max Herold
              </Typography>
              <Button color='inherit' href='/'>About Me</Button>
              <Button color='inherit' href={config.contacts.github} startIcon={<GitHubIcon />}>GitHub</Button>
              <Button color='inherit' component={Link} to={'/resume'}>Resume</Button>
              <Button color='inherit' component={Link} to={'/projects'}>Projects</Button>
              <Button color='inherit' component={Link} to={'/contact'}>Contact</Button>
              <ToggleSwitch onClick={() => setLight((prev) => !prev)}>Toggle Theme</ToggleSwitch>
            </Toolbar>
          </AppBar>
        </Box>
        <Switch>
          <Route exact path="/" component={PortfolioMain} title='home' />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} title='projects' />
        </Switch>
      </HashRouter >
    </ThemeProvider >
  );
}

export default App;
