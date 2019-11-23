import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  TextField, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PageviewIcon from '@material-ui/icons/Pageview';

import MovieCard from './MovieCard';

import '../animation.css';
import styles from './styles';

const Home = ({ classes }) => {
  const [value, setSearchValue] = useState(null);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchBoxStyle = value === 's' ? {
    // alignItems: 'flex-start',
    // backgroundColor: 'red',
    marginTop: '6rem',
  } : {};


  return (
    <div className={classes.homeContainer}>
      <Paper
        className="paper"
        classes={{ root: classes.paper }}
        // style={value === 'searching' ? {
        //   animationName: 'shrink',
        //   animationDuration: '1s',
        //   height: '8rem',
        // } : {}}
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
          {/* <div className={classes.searchIconContainer}> */}
          {/* <PageviewIcon className="searchIcon" fontSize="large" /> */}
          {/* </div> */}
        </div>
        {value === 's' ? <MovieCard />
          : null}
        {/* <MovieCard /> */}
      </Paper>
    </div>

  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
