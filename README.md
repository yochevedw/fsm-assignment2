# Finit State Machine
## _An Assignment For Intuit_

 >“Finite state machines are a great conceptual model for many concerns facing developers – from conditional UI, connectivity monitoring & management to initialization and more. State machines can simplify tangled paths of asynchronous code, they're easy to test, and they inherently lend themselves to helping you avoid unexpected edge-case-state pitfalls.” (http://machina-js.org/)
 
## Features

- A Library implementing a Finit State Machine
- A demo Registration Form moving between states using the FSM library
- Server side serving the state and transition data for the demo

## Tech

- [Angular] - version 12.0.5
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Angular CLI] - is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.


## Installation

##### Step 1
Please make sure you have installed node and npm in your system. You can check your node version and npm version by using the following command:
```sh
node --version
npm --version
```
##### Step 2
Install Angular CLI
```sh
npm install - g @angular/cli
```
##### Step 3
Install the dependencies and build the FSM `Library`

```sh
cd my-lib
npm i
ng build
```
Expect to see a new folder /dist in my-lib
##### Step 4
Install the dependencies and build the `Server`

```sh
cd my-server
npm i
npm link my-lib --save | Needed for using the javascript library
npm run serve
```
Expect to see the message 'My-Server is running on port 3000'
##### Step 5
Install the dependencies and build the `Demo`

```sh
cd my-app
npm i
npm link my-lib --save | Needed for using the javascript library
ng serve
```
Expect to see 
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

## Library and Demo Explanation
The state macine library recieves a list of states. The initial state is marked. All states hold the transitions availabe and the next state for each transition.

##### Library
The library consists of two functions.
| Function | Description |
| ------ | ------ |
| loadStates | Recives an array of states, checks validation, sets the array into the library's object and sets the initail state as current state. |
| moveToNextState | Recives a transition. Sets the current state to be the next state of the given transition + the current state. If no transition recieved returns current state (The first time would be the initial state).  |

##### Demo
The demo is a simple registration form with the states and transitions listed below.
The data can be recieved from the node.js Server or from a json mock file.
On every button click the library funciton _moveToNextState_ is called with a transition.The state is then changed to the next state.

| State | Transition | Next State|
| ------ | ------ |------ |
| PersonalDetails (Initial state) | IsEmployed_Next_Pressed | JobDetails
| PersonalDetails | NotIsEmployed_Next_Pressed | SchoolDetails
| PersonalDetails | Quit_Pressed | Quit
| JobDetails | Next_Pressed | EndAfterJobDetails
| JobDetails | Back_Pressed | PersonalDetails
| JobDetails | Quit_Pressed | Quit
| SchoolDetails | Next_Pressed | EndAfterSchoolDetails
| SchoolDetails | Back_Pressed | PersonalDetails
| SchoolDetails | Quit_Pressed | Quit
| EndAfterSchoolDetails | Back_Pressed | SchoolDetails
| EndAfterSchoolDetails | Quit_Pressed | Quit
| EndAfterJobDetails | Back_Pressed | JobDetails
| EndAfterJobDetails | Quit_Pressed | Quit
| Quit | Start_Pressed | PersonalDetails

## License

Yocheved Welts 2021 :)


[//]: # 

   [dill]: <https://dillinger.io/>
   [State Machine]: <https://www.itemis.com/en/yakindu/state-machine/documentation/user-guide/overview_what_are_state_machines>
   [form styling]: <https://bbbootstrap.com/snippets/form-wizard-using-jquery-steps-88897668>
   [Yocheved]: <and many more>

   
