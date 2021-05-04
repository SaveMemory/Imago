import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/domain-models/Client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  public panelOpenState = false;

  @Input('clients')
  public clients: Array<Client> = new Array<Client>();

  constructor() { }

  ngOnInit() {
  }

}
