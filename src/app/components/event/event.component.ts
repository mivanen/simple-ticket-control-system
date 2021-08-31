import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {



	
events=[
[1, 
'Parun Münchhauseni seiklused', 
'14.09.2021',
'12:00', 
11, 
'„Parun Münchhauseni seiklused“ põhinevad on 18. sajandil elanud Saksa paruni fantaasiaküllastel jutustustel. Parun von Münchhausen oli tuntud jutuvestja, kes mõtles välja kõige uskumatumaid seiklusi. ',
3,3,
false,true,
'Tallinna Vene teater',
'3e27709515e9fe152fc73431d873f483'
],

[2, 
'Russki Ballett - LUIKEDE JÄRV', 
'01.10.2021',
'19:00', 
25, 
'„Luikede järv“ on maailma tuntuim ballett. Mitte ainult Pjotr Iljitš Tšaikovski muusikat, vaid ka Marius Petipa ja Lev Ivanovi koreograafiat peetakse juba pikka aega üldtunnustatud meistritööks, üheks kirkaimaks Vene kultuuri saavutuseks. Ka valge luik jääb alatiseks Vene balleti sümboliks, selle ilu ja suursugususe sümboliks.',
10,10,
false,true,
'Pärnu konserdimaja',
'261938322a92cb468f59071dc0d1ee06'
],

[3, 
'StandUp - Natalia Krasnova', 
'18.09.2021',
'18:00', 
30, 
'Natalia Krasnova, humoorika ajaveebi autor, stsenarist ja ajakirja Maxim lugejate sõnul Venemaa seksikaim naine, esineb 7. juunil Tallinnas oma uue Stand Up programmiga.',
1,1,
false,true,
'Tallinn, Coca-Cola Plaza',
'cda6c006b6000d66579c1bfc5afade34'
],

[4, 
'Narva Ooperipäevad', 
'12.09.2021',
'18:00', 
10, 
'Kreenholmi Manufaktuuri ooperitelk. Lasteetendused. Lee Hoiby "Bon appétit! " - Reykjavík Opera Days (Island).',
20,20,
false,true,
'Narva Kreenholmi Manufaktuuri',
'9933cb32f48078720755399fb153655f'
],

[5, 
'PÄRDI PÄEVAD RAKVERES', 
'18.09.2021',
'18:00', 
15, 
'Ansambli Vox Clamantis kava läbivaks teljeks on kaks tsüklit: Arvo Pärdi „Sieben Magnificat-Antiphonen“ ning Norra helilooja Henrik Ødegaardi neli osa gregooriuse laulul baseeruvast tsüklist „Maria Magdalena“.',
5,5,
false,true,
'Rakvere Kolmainu kirik',
'14b9107a80a28f4f7a5014fcaffbdacd'
]

];


tickets=new Array();
ticket_id:number=0;
sold_tickets_count:number=1;
event_ticket_avaible:number=0;

earned_money:number=0;

constructor() { }

ngOnInit(): void {
}


getEarnedMoney()
{
let earned_money=this.earned_money;
return(earned_money);
}

getAvaibleTickets(event_id:number)
{

  let event_ticket_total = +this.events[event_id-1][6]; 
  let sold_tickets_count=0; 
  let event_ticket_avaible=0;

  this.tickets.forEach(function(value)
  {
    if(value[1]==event_id)
    {     
       if(value[3]==true) sold_tickets_count++;
    }
  });
  event_ticket_avaible=event_ticket_total-sold_tickets_count;
  return event_ticket_avaible;


}

getSoldTickets()
{
  let sold_tickets_count=0;
  this.tickets.forEach(function(value)
  {
    if(value[3]==true) sold_tickets_count++;
  });
  return sold_tickets_count;
}



getSoldTicketsSumm()
{
  let sold_tickets_summ=0;
  this.tickets.forEach(function(value)
  {
    if(value[3]==true) 
      {
        sold_tickets_summ++;
      }
  });

  return sold_tickets_summ;
}

  

  SellTicket(ticket_id:number)  
  {

    let event_id = +this.events[ticket_id][0];
    let event_ticket_avaible=this.getAvaibleTickets(event_id);
    

    if(event_ticket_avaible==1) this.events[event_id-1][9]=false;
    
    if(event_ticket_avaible>=1) 
    {

      this.ticket_id++;
      let ticket_price =+ this.events[event_id-1][4];
      let ticket_date_time = this.events[event_id-1][2]+' '+this.events[event_id-1][3];
      let tickets_detail=new Array();
      tickets_detail[0]=this.ticket_id;
      tickets_detail[1]=event_id;
      tickets_detail[2]=this.events[event_id-1][1];
      tickets_detail[3]=true; //Status
      tickets_detail[4]=ticket_price; //Price
       tickets_detail[5]=ticket_date_time; //Date and time
      this.tickets.push(tickets_detail);
      
     
      this.earned_money+=ticket_price;
     
      
    }
    else this.events[event_id-1][9]=false;        
   
    event_ticket_avaible=this.getAvaibleTickets(event_id);
    this.events[event_id-1][7]=event_ticket_avaible;
  }


  showEdit(i:number)  
  {
    this.events[i][8] =! this.events[i][8];
  }

  
  CheckTickets(i:number) 
  {     
    let event_id=+this.events[i][0];
    let event_ticket_avaible=this.getAvaibleTickets(event_id);
    this.events[i][7]=event_ticket_avaible;

     if(this.events[i][7]>0) this.events[i][9]=true;
     if(this.events[i][7]<0) this.events[i][9]=false;
  }



  ReturnTicket(ticket_id:number)
  {
    ticket_id--;
    let event_id = this.tickets[ticket_id][1];     

    this.tickets[ticket_id][3]=false;    
    let  event_ticket_avaible=this.getAvaibleTickets(event_id);   
    this.events[event_id-1][7]=event_ticket_avaible;
    if(event_ticket_avaible>0) this.events[event_id-1][9]=true;

     let ticket_price =+this.tickets[ticket_id][4];
    

     this.earned_money-=ticket_price;


  }


  

}
