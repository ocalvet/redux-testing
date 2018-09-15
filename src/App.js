import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux';

export class App extends Component {
  
  increaseCounter = () => {
    this.props.onIncreaseCounter();
  }

  decreaseCounter = () => {
    this.props.onDecreaseCounter();
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

const mapDispatchToProps = dispatch => ({
  onIncreaseCounter: () => dispatch(increaseCounter),
  onDecreaseCounter: () => dispatch(decreaseCounter),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
