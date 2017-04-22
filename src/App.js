import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <Header appName={this.props.appName}/>
      <Home />
        );
  }
}

export default connect(mapStateToProps, () => ({}))(App);