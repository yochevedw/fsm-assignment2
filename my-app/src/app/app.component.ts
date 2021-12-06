import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';
import { CandidateModel } from './Models/candidateModel';
import { StateEnum } from './Utils/enums';
import { StateService } from './Services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  currentState: string = '';
  candidate: CandidateModel;
  State;

  constructor(private myLibService: MyLibService, private stateService: StateService) {
    this.candidate = new CandidateModel();
    this.State = StateEnum;

  }
  ngOnInit() {

    //Get data from Server
    this.stateService.getStateData()
    .subscribe((data: any) =>
            //Load data to FSM 
            {
              if(!Array.isArray(data))
                data = data.stateData;//From MockData
            this.loadDataToFSM(data)});
  }

  loadDataToFSM(stateData:any)
  {
    try
    {
      this.myLibService.loadStates(stateData);
      this.moveToNextStep();
    }
    catch(err)
    {
        console.log(err);
    }
  }

  moveToNextStep(transition?:string)
  {
      this.currentState = this.myLibService.moveToNextState(transition);
  }

  quit()
  {
    this.candidate = new CandidateModel();
    this.moveToNextStep('Quit_Pressed');
  }
}
