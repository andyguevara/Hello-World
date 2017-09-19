// Holds the code for connecting to AWS

import { Component, Input } from '@angular/core';
import { VodRecord } from './vodrecord';
import { VodJobInfo } from './vodrecord';

@Component({
  selector: 'vodrecord-detail',
  template: `
  <div *ngIf="params.vodrecord">
    <h2>{{viewtitle}}</h2>
    <div><label>House ID: &nbsp; </label>{{params.vodrecord.houseId}}</div>
    <div>
      <label>Title: &nbsp; </label>
      {{params.jobInfo.title}}
      <p>
    </div>
  </div>
 `
})

export class VodRecordDetailComponent {
  @Input('params') params: DetailParams;
  viewtitle = 'View/Edit Record';
}

 export class DetailParams{
  vodrecord: VodRecord;
  jobInfo: VodJobInfo;
 }

