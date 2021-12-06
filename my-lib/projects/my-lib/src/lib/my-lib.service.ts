import { Injectable } from '@angular/core';
import { StateModel } from '../Models/stateModel';
import { StateWTransitionModel} from '../Models/stateTransitionModel';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  fsm: StateModel[];
  currentState: StateModel;

  constructor() { 
    this.fsm = [];
    this.currentState = new StateModel();
  }

  loadStates(lstStates: StateModel[])
  {
    let curState: StateModel|undefined;
      
      //Validation Checks
      if(lstStates.find(s=>!s.stateName) != null)
      {
        console.log('Not all states have a name');
        return;
      }

      if(lstStates.find(s=>s.isInitialState) == null)
      {
        console.log('No initial state was found');
        return;
      }

      if(lstStates.filter(s=>s.isInitialState).length > 1)
      {
        console.log('More than one initial state assigned');
        return;
      }
      //End of Validation checkes

      this.fsm = lstStates;

      //Set current state to initial state
      curState = this.fsm.find(s=>s.isInitialState == true);
      if(curState)
        this.currentState = curState;
  }

  getCurrentStateName()
  {
    if(!this.currentState)
      throw "Current State is not defined";
      
    return this.currentState.stateName;
  }

  moveToNextState(givenTransition?:string)
  {
    let transition:StateWTransitionModel|undefined;

    if(!this.currentState)
    {
      throw "Current state is not defined";
    }
    //First time return initial state
    if(!givenTransition)
    {
      return this.currentState.stateName;
    }

    if(this.currentState.transitions.length == 0)
    {
      throw "Current state has no transitions";
    }

    transition = this.currentState.transitions.find(t=>t.transition == givenTransition);
      
    if(!transition)
      throw "Given transition does not exist on current state";

    let nextState = this.fsm.find(s=>s.stateName == transition?.nextState);
    if(nextState)
    {
      this.currentState = nextState;
      return nextState.stateName;
    }
    
    return '';
     
  }

}
