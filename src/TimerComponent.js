import React from 'react';

class TimerComponent extends React.Component {
  state = {value: 0};

  componentDidMount() {
    // this.timer = setInterval(
    //   () =>
    //     this.setState((current) => {
    //       console.log(current);
    //       return {value: current.value + 1};
    //     }),
    //   1000
    // );
    // this.subscription = this.props.subscribe();
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // this.subscription.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>Halo, dunia!</h1>
        <h3>Nilai saat ini: {this.state.value}</h3>
      </div>
    );
  }
}

export default class TimerWrapper extends React.Component {
  state = {showTimer: true};

  showTimer = () =>
    this.setState((current) => ({showTimer: !current.showTimer}));

  render() {
    return (
      <div>
        <button onClick={this.showTimer}>show timer</button>
        {this.state.showTimer ? <TimerComponent /> : null}
      </div>
    );
  }
}
