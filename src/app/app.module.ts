import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from'@angular/router' ;
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { TicketComponent } from './components/ticket/ticket.component';



const appRoutes: Routes= [
{path:'',component:EventComponent},
{path:'ticket',component:TicketComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TicketComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
