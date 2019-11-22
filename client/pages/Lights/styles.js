import constants from '../../cssConstants';

const { popEffect } = constants;

export default {
  lightsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100%',
    alignItems: 'flewx-start',
    justifyContent: 'center',
    // height: '92vh',
  },
  paper: {
    animationName: popEffect.animationName,
    animationDuration: popEffect.animationDuration,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    height: popEffect.boxStartDimension,
    width: popEffect.boxStartDimension,
    justifyContent: 'flex-end',
    textAlign: 'center',
    backgroundColor: '#FDE74C',
  },
};
