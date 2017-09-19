
export class AwsRawData {
  Count: number;
  Items: VodRecord[];
  ScannedCount: number;
  ConsumedCapacity: any;
}

export class VodRecord {
  createDate: string;
  vodState: string;
  houseId: string;
  updateDate: string;
  vodJobInfo: string;
}

export class VodJobInfo {
  title: string;
  matchID: string;
  state: string;
  files: VodFile[];
  metadata: VodMetaData;
  mediaId: string;
  runtimeSeconds: number;
  errorDetails: any;
}

export class VodFile {
  type: string;
  filename: string;
  runtime: number;
  md5: string;
}

export class VodMetaData {
  houseID: string;
  matchID: string;
  titleFull: string;
  summary: string;
  franchise: string;
  category: string;
  subtitles: boolean;
  embargo: boolean;
  contentType: string;
  ads: boolean;
  status: string;
  mediaId: string;
  runtimeSeconds: number;
  errorDetails: any;
}

