import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Make material-ui happy
// Needed for onTouchTap
//http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SearchBox from './SearchBox';
//import makeExpanding from './expanding-animation';
//const ExpandingSearchBox = makeExpanding(SearchBox);

//import makeMoveUp from './move-up-animation';
//const MoveUpSearchBox = makeMoveUp(SearchBox);

//import makeSpringUp from './spring-up-animation';
//const SpringUpSearchBox = makeSpringUp(SearchBox);

import makeShakeAnimation from './shake-animation';
const ShakeAnimationSearchBox = makeShakeAnimation(SearchBox);


class App extends Component {
  render() {
    //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    return (
      <MuiThemeProvider>
        <div style={style}>
          <ShakeAnimationSearchBox  />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
