import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { VodRecord } from './vodrecord';
import { VodRecordService } from './app.database.service';
import { VodJobInfo } from './vodrecord';
import { DetailParams } from './app.record-detail.component';

@Component({
  selector: 'bwm-app',
  template: `
    <h2>{{title}}</h2>
    <ul class="records">
      <li *ngFor="let rec of records"
        [class.selected]="rec === selectedRecord"
        (click)="onSelect(rec)">
        {{rec.houseId}} &nbsp; {{rec.updateDate}} &nbsp; {{rec.vodState}}
      </li>
    </ul>
    <vodrecord-detail [params]="params"></vodrecord-detail>
    `,
  providers: [VodRecordService]
})


export class AppComponent implements OnInit {
  title = 'Blizzard Workflow Manager Dashboard';
  records: VodRecord[]; // = AWSRAWDATA.Items;
  vodData: string; // = AWSRAWDATA.Items[2].vodJobInfo;
  jobInfo: VodJobInfo; // = JSON.parse(this.vodData);
  selectedRecord: VodRecord;
  params: DetailParams = new DetailParams();
  constructor(private vodRecordService: VodRecordService) { }

  getRecords(): void {
    this.vodRecordService.getAllVodRecords().then(records => this.records = records);
  }

  onSelect(rec: VodRecord): void {
    this.selectedRecord = rec;
//    console.log("Got here1");
    this.vodData = rec.vodJobInfo;
    this.jobInfo = JSON.parse(this.vodData);
    this.params.vodrecord = this.selectedRecord;
    this.params.jobInfo = this.jobInfo;
  }

  ngOnInit(): void {
    this.getRecords();
  }
}
