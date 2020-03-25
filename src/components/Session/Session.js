import React, { Component } from "react";
import "./Session.css";

export default class Session extends Component {
  state = {
    currentTime: 1500,
    isRunning: false,
    isUpdatableDown: true,
    isUpdatableUp: true
  };
  interval = null;

  start = () => {
    this.setState({
      isRunning: true,
      isUpdatableDown: false,
      isUpdatableUp: false
    });
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      if (this.state.currentTime > 0) {
        this.setState({ currentTime: this.state.currentTime - 1 });
      }
    }, 1000);
  };

  increaseTime = () => {
    this.setState({
      currentTime: this.state.currentTime + 60,
      isUpdatableDown: true
    });
    if (this.state.currentTime >= 1740) {
      this.setState({ isUpdatableUp: false });
    }
  };
  decreaseTime = () => {
    this.setState({
      currentTime: this.state.currentTime - 60,
      isUpdatableUp: true
    });
    if (this.state.currentTime <= 120) {
      this.setState({ isUpdatableDown: false });
    }
  };

  pause = () => {
    clearInterval(this.interval);
    if (this.interval) {
      this.interval = null;
    }
    this.setState({ isRunning: false });
  };
  reset = () => {
    this.setState({
      currentTime: 1500,
      isRunning: false,
      isUpdatableUp: true,
      isUpdatableDown: true
    });
    clearInterval(this.interval);
    if (this.interval) {
      this.interval = null;
    }
  };

  render() {
    const {
      currentTime,
      isRunning,
      isUpdatableDown,
      isUpdatableUp
    } = this.state;
    return (
      <div>
        <button onClick={this.increaseTime} disabled={!isUpdatableUp}>
          <i className="fas fa-arrow-up arrow"></i>
        </button>
        <button onClick={this.decreaseTime} disabled={!isUpdatableDown}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <div>
          {Math.floor(currentTime / 60)}:
          {currentTime % 60 >= 10 ? currentTime % 60 : "0" + (currentTime % 60)}
        </div>
        {isRunning ? (
          <button onClick={this.pause}>
            <i className="fas fa-pause"></i>
          </button>
        ) : (
          <button onClick={this.start}>
            <i className="fas fa-play"></i>
          </button>
        )}
        <button onClick={this.reset}>
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
    );
  }
}
