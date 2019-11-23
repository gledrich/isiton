import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlineIcon from '@material-ui/icons/CancelOutlined';
import styles from './styles';

const MovieCard = ({ classes }) => {
  const available = true;

  const backgroundColors = {
    available: '#00C964',
    unavailable: '#FF6F3F',
  };

  return (
    <div className={classes.movieListContainer}>
      <Chip
        className={classes.chip}
        icon={<CheckCircleOutlineIcon className={classes.iconAvailable} />}
        label={<img src="/images/netflix.png" style={{ width: '5rem' }} />}
        style={{
          backgroundColor:
           available ? backgroundColors.available
             : backgroundColors.unavailable,
        }}
        clickable
        size="medium"
        color="primary"
        deleteIcon={<DoneIcon />}
      />
      <Chip
        className={classes.chip}
        icon={<CancelOutlineIcon fontSize="large" className={classes.iconNotAvailable} />}
        label={<img src="/images/sky.png" style={{ width: '5rem' }} />}
        style={{
          backgroundColor:
          available ? backgroundColors.unavailable
            : backgroundColors.unavailable,
        }}
        clickable
        size="medium"
        color="primary"
        deleteIcon={<DoneIcon />}
      />
      <Chip
        className={classes.chip}
        icon={<CheckCircleOutlineIcon className={classes.iconAvailable} />}
        label={<img src="/images/amazon.png" style={{ width: '5rem' }} />}
        style={{
          backgroundColor:
           available ? backgroundColors.available
             : backgroundColors.unavailable,
        }}
        clickable
        size="medium"
        color="primary"
      />
    </div>
  );
};

export default withStyles(styles)(MovieCard);
