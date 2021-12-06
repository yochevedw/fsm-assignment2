import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CandidateModel } from 'src/app/Models/candidateModel';
import { StateEnum } from 'src/app/Utils/enums';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html'
})
export class EndComponent implements OnInit {

  @Input() candidate: CandidateModel = new CandidateModel();
  @Output() moveToNextState: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  btnBackClicked()
  {
    this.moveToNextState.emit('Back_Pressed');
  }

}
