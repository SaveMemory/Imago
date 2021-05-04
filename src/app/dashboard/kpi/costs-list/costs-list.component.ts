import { Component, Input, OnInit } from '@angular/core';
import { Cost } from '../../models/Cost';

@Component({
  selector: 'app-costs-list',
  templateUrl: './costs-list.component.html',
  styleUrls: ['./costs-list.component.scss']
})
export class CostsListComponent implements OnInit {

  @Input('costs')
  public costs: Array<Cost> = new Array<Cost>();

  constructor() { }

  ngOnInit() {
  }

}
