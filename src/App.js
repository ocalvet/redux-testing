import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  
  increaseCounter = () => {
    console.log('Increasing counter');
  }

  decreaseCounter = () => {
    console.log('Decreasing counter');
  }

  render() {
    const { count } = this.props;
    return (
      <div className="App">
        <h1>Counter ({count})</h1>
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

export default connect(mapStateToProps)(App);
