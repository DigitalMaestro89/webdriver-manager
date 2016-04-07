import * as chalk from 'chalk';

export enum LOG_LEVEL { DEBUG, WARN, INFO }

export class Logger {
  static info(message: string, opt_noTimestamp?: boolean): void {
    if (!opt_noTimestamp) {
      message = Logger.timestamp() + message;
    }
    console.log(message);
  }

  static warn(message: string, opt_noTimestamp?: boolean): void {
    if (!opt_noTimestamp) {
      message = Logger.timestamp() + chalk.yellow(message);
    }
    console.log(message);
  }

  static error(message: string, opt_noTimestamp?: boolean): void {
    if (!opt_noTimestamp) {
      message = Logger.timestamp() + chalk.red(message);
    }
    console.log(message);
  }

  static timestamp(): string {
    let d = new Date();
    let ts = '[' + chalk.gray(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()) + ']';
    let spaces = 22 - ts.length;
    ts += Array(spaces).join(' ');
    return ts;
  }
}

export class Req {}
