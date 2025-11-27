import { Component, inject } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-form',
  imports: [],
  providers: [ConfigService],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  config = inject(ConfigService);

  constructor() {
    this.config.init();
    console.log('%c#debug 🚀 configs:', 'color: hotpink;', this.config.brixx.configs);
    console.log('%c#debug 🚀 fg value:', 'color: yellow;', this.config.brixx.formGroup.value);
  }
}
