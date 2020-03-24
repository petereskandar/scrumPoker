import { JoinSessionComponent } from './join-session/join-session.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: CreateSessionComponent},
  {path: 'manage/:id', component: ManageSessionComponent},
  {path: 'join/:id', component: JoinSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionManagementRoutingModule { }
