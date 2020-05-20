import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  id: 'toggle',
  initial: 'red',
  states: {
    red :{
      on: {changeLight: 'green'}
      },
    yellow:{
      on: {changeLight: 'red'}
    },
    green:{
      on: {changeLight: 'red'}
    }
  }}
);


const service = interpret(lightMachine);

export { lightMachine, service };