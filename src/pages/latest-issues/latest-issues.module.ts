import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestIssuesPage } from './latest-issues';

@NgModule({
  declarations: [
    LatestIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(LatestIssuesPage),
  ],
})
export class LatestIssuesPageModule {}
