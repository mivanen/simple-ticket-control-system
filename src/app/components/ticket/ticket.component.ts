import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {



	id:number=1;
	buyer:string='Name Surname';
	date_of_buying:string='28.08.2021';
	event_id:number=3;
	status:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
