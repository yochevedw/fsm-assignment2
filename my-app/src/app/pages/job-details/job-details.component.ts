import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CandidateModel } from 'src/app/Models/candidateModel';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  @Input() candidate: CandidateModel = new CandidateModel();
  @Output() moveToNextState: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  btnNextClicked()
  {
      this.moveToNextState.emit('Next_Pressed');
  }

  btnBackClicked()
  {
      this.moveToNextState.emit('Back_Pressed');
  }

}
