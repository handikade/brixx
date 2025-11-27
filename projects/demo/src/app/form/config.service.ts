import { Injectable } from '@angular/core';
import { Brixx, FieldType } from '@brixx';

@Injectable()
export class ConfigService {
  brixx = new Brixx();

  init() {
    this.brixx.addConfig({
      key: 'name',
      type: FieldType.TEXT,
      label: 'Name',
    });

    this.brixx.addConfig({
      key: 'age',
      type: FieldType.NUMBER,
      label: 'Age',
    });
  }
}
