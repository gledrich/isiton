import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  TextField, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PageviewIcon from '@material-ui/icons/Pageview';

import '../animation.css';
import styles from './styles';

const Home = ({ classes }) => {
  const [value, setSearchValue] = useState(null);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchBoxStyle = value === 'show' ? {
    alignItems: 'center',
    minHeight: '10rem',
  } : { alignItems: 'flex-end' };

  // const paperStyle = value ? {
  //   // height: '5rem',
  //   animationName: 'shrink',
  //   animationDuration: '1s',
  // } : {
  //     // height: '25rem',
  //     animationName: 'grow',
  //     animationDuration: '1s',
  //   };

  return (
    <div className={classes.homeContainer}>
      <Paper
        className="paper"
        classes={{ root: classes.paper }}
        elevation={12}
      >
        <div
          className={classes.searchBox}
          style={searchBoxStyle}
        >
          <TextField
            autoFocus
            InputProps={{
              classes: {
                input: classes.input,
                focused: classes.inputFocused,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                focused: classes.inputLabelFocused,
              },
            }}
            label="Search Movies..."
            onChange={handleChange}
          />
          <PageviewIcon classes={{ root: classes.icon }} fontSize="large" />
        </div>
        <div className={classes.searchIconContainer}>
          {/* <MovieCard /> */}
          {/* {value === 'show' ? <MovieCard /> : null} */}
          {/* <PageviewIcon className="searchIcon" fontSize="large" /> */}
        </div>
      </Paper>
    </div>

  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
