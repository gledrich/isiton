import constants from '../../cssConstants';

const { popEffect } = constants;

export default {
  homeContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    flex: '0 0 100%',
    alignItems: 'center',
  },
  titleContainer: {
    order: 0,
  },
  searchBox: {
    order: 1,
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: popEffect.boxStartDimension,
    width: popEffect.boxStartDimension,
    textAlign: 'center',
    backgroundColor: '#FF5454',
    animationName: popEffect.animationName,
    animationDuration: popEffect.animationDuration,
  },
  input: {
    color: 'white',
  },
  inputFocused: {
    color: 'black! important',
  },
  inputLabel: {
    color: 'white',
  },
  inputLabelFocused: {
    color: 'black !important',
  },
  icon: {
    display: 'flex',
    marginLeft: '.4rem',
  },
};
