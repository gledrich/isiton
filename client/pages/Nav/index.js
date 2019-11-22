import PropTypes from 'prop-types';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Nav = ({ classes, navigate, index }) =>
// const [value, setValue] = useState(0);


// const buttonSelected = (index, value) => (value === index ? classes.selectedButtonIcon : {});

  (
    <div className={classes.navContainer}>
      <BottomNavigation
        value={index}
        onChange={(event, newValue) => {
          // setValue(newValue);
          navigate(newValue);
        }}
        showLabels
        className={classes.root}
      >

        <BottomNavigationAction
          classes={{
            root: classes.rootAction,
            selected: classes.rootActionFocused,
          }}
          label="Movies"
          icon={(
            <MovieIcon
              className={index === 0 ? classes.moviesSelected : ''}
            />
          )}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootAction,
            selected: classes.rootActionFocused,
          }}
          label="Lights"
          icon={(
            <EmojiObjectsIcon
              className={index === 1 ? classes.lightsSelected : ''}
            />
          )}
        />
        <BottomNavigationAction
          classes={{
            root: classes.rootAction,
            selected: classes.rootActionFocused,
          }}
          label="Action"
          icon={(
            <CallMissedOutgoingIcon
              className={index === 2 ? classes.actionSelected : ''}
            />
          )}
        />
      </BottomNavigation>
    </div>
  );
Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
