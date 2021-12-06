import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.component.html',
  styleUrls: ['./quit.component.scss']
})
export class QuitComponent implements OnInit {

  @Output() moveToNextState: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  btnStartClicked()
  {
    this.moveToNextState.emit('Start_Pressed');
  }

}
