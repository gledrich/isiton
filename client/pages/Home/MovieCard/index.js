import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, CardMedia, Avatar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const MovieCard = ({ classes }) => (
  <div className={classes.cardContainer}>
    <Card classes={{ root: classes.card }}>
      <CardHeader
        classes={{ root: classes.cardHeader }}
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        )}
        title="Movie"
        subheader="2019"
      />
      <CardMedia
        className={classes.cardMedia}
        image="/images/spider_man.jpg"
        title="Paella dish"
      />
      <CardContent classes={{ root: classes.cardContent }}>
        Content
      </CardContent>
    </Card>
  </div>
);

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
