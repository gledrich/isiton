import { TextField, Paper, Typography } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';

import './index.css';

export default () => (
  <div className="homeContainer">
    <Paper className="searchItem">
      <div className="titleContainer">
        <Typography component="h1">Is it on...</Typography>
      </div>
      <div className="searchBox">
        <TextField>Search</TextField>
      </div>
      <div className="searchIconContainer">
        <PageviewIcon className="searchIcon" fontSize="large" />
      </div>
    </Paper>
  </div>
);
