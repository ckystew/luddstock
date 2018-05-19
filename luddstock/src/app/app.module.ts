import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupService } from './group.service';

import { AppComponent } from './app.component';
import { CapacityCounterComponent } from './capacity-counter/capacity-counter.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CapacityCounterComponent,
    GroupsComponent,
    GroupDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
