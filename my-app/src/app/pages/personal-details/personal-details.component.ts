import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CandidateModel } from 'src/app/Models/candidateModel';
import { employmentStatusEnum } from 'src/app/Utils/enums';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit {
  @Input() candidate: CandidateModel = new CandidateModel();
  @Output() moveToNextState: EventEmitter<any> = new EventEmitter();
  employmentStatus: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.employmentStatus = this.candidate.employmentStatus;
  }

  btnNextClicked()
  {
    switch(this.employmentStatus)
    {
      case employmentStatusEnum.Student:
        this.candidate.employmentStatus = employmentStatusEnum.Student;
        this.moveToNextState.emit('NotIsEmployed_Next_Pressed');
        break;
      case employmentStatusEnum.Employed:
        this.candidate.employmentStatus = employmentStatusEnum.Employed;
        this.moveToNextState.emit('IsEmployed_Next_Pressed');
        break;
      default:
          alert("You must choose an employment status to continue!")
          break;
    }
  }

}
