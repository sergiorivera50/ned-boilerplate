import winston from 'winston'

class Logger {
  private logger: winston.Logger

  constructor(route: string) {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${route}.log`,
          zippedArchive: false
        })
      ],
      format: winston.format.printf(info => {
        let msg = `${this.dateFormat()} | ${info.level.toUpperCase()} | ${route}.log | ${info.message} | `
        if (info.obj) msg += `data:${JSON.stringify(info.obj)} | `
        return msg
      })
    })
  }

  private dateFormat() {
    return new Date(Date.now()).toUTCString()
  }

  public info(msg: string, obj?: any) {
    obj
      ? this.logger.log('info', msg, { obj })
      : this.logger.log('info', msg)
  }

  public debug(msg: string, obj?: any) {
    obj
      ? this.logger.log('debug', msg, { obj })
      : this.logger.log('debug', msg)
  }

  public error(msg: string, obj?: any) {
    obj
      ? this.logger.log('error', msg, { obj })
      : this.logger.log('error', msg)
  }
}

export const Log = new Logger('app')
