class TrafficSignal {
    constructor() {
      this.state = new RedSignal(this);
    }
  
    setState(state) {
      this.state = state;
    }
  
    request() {
      this.state.handle();
    }
  }
  
  class SignalState {
    constructor(signal) {
      this.signal = signal;
    }
  
    handle() {}
  }
  
  class RedSignal extends SignalState {
    handle() {
      console.log("Traffic Signal: Red - Stop!");
      this.signal.setState(new GreenSignal(this.signal));
    }
  }
  
  class YellowSignal extends SignalState {
    handle() {
      console.log("Traffic Signal: Yellow - Prepare to stop.");
      this.signal.setState(new RedSignal(this.signal));
    }
  }
  
  class GreenSignal extends SignalState {
    handle() {
      console.log("Traffic Signal: Green - Go!");
      this.signal.setState(new YellowSignal(this.signal));
    }
  }
  
  const trafficSignal = new TrafficSignal();
  
  trafficSignal.request();
  trafficSignal.request(); 
  trafficSignal.request(); 
  trafficSignal.request(); 
  
  