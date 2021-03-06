import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux';
//@ Flow
import styleClasses from './App.css';

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
        <div>
          <h1 className="title">Counter ({count})</h1>
          <div className="actions">
            <button onClick={this.increaseCounter}>Increase</button>
            <button onClick={this.decreaseCounter}>Decrease</button>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  count: state
});

export const mapDispatchToProps = dispatch => ({
  onIncreaseCounter: () => dispatch(increaseCounter),
  onDecreaseCounter: () => dispatch(decreaseCounter),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
