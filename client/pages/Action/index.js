import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Action = ({ classes }) => (
  <div className={classes.actionContainer}>

    <Paper classes={{ root: classes.paper }} elevation={12} />
  </div>
);

Action.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Action);
