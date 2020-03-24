import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionManagementRoutingModule } from './session-management-routing.module';
import { CreateSessionComponent } from './create-session/create-session.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { JoinSessionComponent } from './join-session/join-session.component';
import { PokerCardsComponent } from './join-session/poker-cards/poker-cards.component';

@NgModule({
  declarations: [CreateSessionComponent, ManageSessionComponent, JoinSessionComponent, PokerCardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SessionManagementRoutingModule
  ]
})
export class SessionManagementModule { }
