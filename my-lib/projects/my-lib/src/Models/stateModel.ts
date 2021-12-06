import { StateWTransitionModel } from "./stateTransitionModel";

export class StateModel
{
    stateName: string;
    isInitialState: boolean;
    transitions: StateWTransitionModel[];

    constructor()
    {
        this.stateName = '';
        this.isInitialState = false;
        this.transitions = [];
    }
}