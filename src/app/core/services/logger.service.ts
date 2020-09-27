import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(message) {
    this.log('log', message);
  }

  warn(message) {
    this.log('warn', message);
  }

  error(message) {
    this.log('error', message);
  }

  log(type, message) {
    if (environment.production && (type === 'info' || type === 'warn'))
      return;
    console[type](message);
  }
}
