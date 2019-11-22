import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import '../animation.css';

const Lights = ({ classes }) => (
  <div className={classes.lightsContainer}>
    <Paper classes={{ root: classes.paper }} elevation={12} />
  </div>
);

Lights.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lights);
