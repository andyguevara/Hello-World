// To hold the db and record access calls
import { Injectable } from '@angular/core';
import { VodRecord } from './vodrecord';
import { AWSRAWDATA } from './mock-db';

@Injectable()
export class VodRecordService {
  getAllVodRecords(): Promise<VodRecord[]> {
    return Promise.resolve(AWSRAWDATA.Items);
  }
  getVodRecord( id: string ): void {}; // stub
}

