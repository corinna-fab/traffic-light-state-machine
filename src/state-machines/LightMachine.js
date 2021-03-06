import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  id: 'lightToggle',
  initial: 'RedOn',
  states: {
    RedOn : {on: {changeLight: 'GreenOn'}},
    YellowOn: {on: {changeLight: 'RedOn'}},
    GreenOn: {on: {changeLight: 'YellowOn'}}
  }
});


const service = interpret(lightMachine);

export { lightMachine, service };