import constants from '../../cssConstants';

const { popEffect } = constants;

export default {
  homeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100%',
    justifyContent: 'center',
  },
  titleContainer: {
    order: 0,
  },
  searchBox: {
    order: 1,
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  searchIconContainer: {
    order: 2,
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%',
    overflow: 'scroll',
    maxHeight: '15rem',
    // backgroundColor: 'orange',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    height: popEffect.boxStartDimension,
    width: popEffect.boxStartDimension,
    justifyContent: 'flex-end',
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
