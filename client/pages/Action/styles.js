import constants from '../../cssConstants';

const { popEffect } = constants;

export default {
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // height: '92vh',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    animationName: popEffect.animationName,
    animationDuration: popEffect.animationDuration,
    height: popEffect.boxStartDimension,
    width: popEffect.boxStartDimension,
    justifyContent: 'flex-end',
    textAlign: 'center',
    backgroundColor: '#57E57F',
  },
};
