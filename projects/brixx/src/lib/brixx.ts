import { FormGroup } from '@angular/forms';
import { Config } from './config';
import { generateFormControlFromConfig } from './form-control.util';

export class Brixx {
  configs: Config[] = [];
  formGroup: FormGroup = new FormGroup({});

  addConfig(config: Config) {
    if (this.configs.some((c) => c.key === config.key) || this.formGroup.contains(config.key)) {
      throw new Error(`Duplicate config key "${config.key}"`);
    }

    this.configs.push(config);
    this.formGroup.addControl(config.key, generateFormControlFromConfig(config));
  }

  removeConfig(key: string) {
    this.configs = this.configs.filter((c) => c.key !== key);
    this.formGroup.removeControl(key);
  }
}
