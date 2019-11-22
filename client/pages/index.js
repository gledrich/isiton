import { Component, createRef } from 'react';
import {
  ThemeProvider, createMuiTheme,
} from '@material-ui/core/styles';
import Head from 'next/head';
import Nav from './Nav';
import Home from './Home';
import Lights from './Lights';
import Action from './Action';
import './style.css';

const pages = {
  0: <Home />,
  1: <Lights />,
  2: <Action />,
};

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.navigate = this.navigate.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // componentDidMount() {
  //   this.myDiv.addEventListener('keydown', this.handleKeyDown);
  //   this.myDiv.focus();
  // }

  // componentWillUnmount() {
  //   this.myDiv.removeEventListener('keydown', this.handleKeyDown);
  // }


  handleKeyDown(e) {
    // console.log(e.key, e.ctrlKey);
    if (e.ctrlKey && !isNaN(e.key)) {
      this.setState({
        value: parseInt(e.key, 0) - 1,
      });
    }
  }

  navigate(value) {
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;


    return (
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            type: 'dark',
            primary: {
              main: '#000',
            },
            secondary: {
              main: '#FF5454',
            },
          },
          overrides: {
            MuiTouchRipple: {
              child: {
                backgroundColor: 'rgba(0, 0, 0, 0.87)',
              },
            },
          },
        })}
      >
        <div
          role="main"
          onKeyDown={this.handleKeyDown}
          className="example"
          ref={(ref) => this.myDiv = ref}
        >
          <Head>
            <title>Home</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          </Head>
          <Nav navigate={this.navigate} index={value} />
          {console.log({ value })}
          {pages[value]}
        </div>
      </ThemeProvider>
    );
  }
}

export default IndexPage;
