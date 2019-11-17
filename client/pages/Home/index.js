import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  TextField, Paper, Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import './index.css';


const Home = ({ classes }) => {
  const [value, setSearchValue] = useState('Controlled');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (

    <div className="homeContainer">
      <Paper classes={{ root: classes.paper }} elevation={12}>
        <div className="titleContainer">
          <Typography component="h1">...</Typography>
        </div>
        <div className="searchBox">
          <TextField
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
            label="search movies..."
            onChange={handleChange}
          >
            Search

          </TextField>
        </div>
        <div className="searchIconContainer">
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
