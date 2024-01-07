class Light {
    turnOn() {
      console.log("Light is ON");
    }
  
    turnOff() {
      console.log("Light is OFF");
    }
  }
  
  class Command {
    execute() {}
  }
  
  class TurnOnLightCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class TurnOffLightCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  
  class RemoteControl {
    constructor() {
      this.command = null;
    }
  
    setCommand(command) {
      this.command = command;
    }
  
    pressButton() {
      this.command.execute();
    }
  }
  
  const livingRoomLight = new Light();
  const remoteControl = new RemoteControl();
  
  const turnOnCommand = new TurnOnLightCommand(livingRoomLight);
  const turnOffCommand = new TurnOffLightCommand(livingRoomLight);
  
  remoteControl.setCommand(turnOnCommand);
  remoteControl.pressButton(); 
  
  remoteControl.setCommand(turnOffCommand);
  remoteControl.pressButton(); 