import { Component, OnInit } from '@angular/core';
import { Subject } from './models/Subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  public subjects: Subject[] =  [new Subject(4, 'test')];

  public constructor() { }

  public ngOnInit(): void {
  }

}
