import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {spacing} from 'material-ui/styles';

const ThemeOverrides = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#32A1D5'
  },
  spacing: {
    desktopKeylineIncrement: 48 // was 64: Controls AppBar height, but effect on other components currently unknown!
  },
};

export default class Theme extends React.Component {
  // makes the muiTheme available to the context of child components
  getChildContext() {
    return {muiTheme: getMuiTheme(lightBaseTheme, ThemeOverrides)};
  };

  render(){
    return this.props.children
  }
}

Theme.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};