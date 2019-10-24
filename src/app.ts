import express from 'express';
import { createLogger, format, transports } from 'winston';

const dd_options = {
  'response_code': true,
  'tags': ['app:admitech']
};
import connectDatadog from 'connect-datadog';

const app = express();
const port = 8080;


// Logger creation
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'admitech-back' },
  transports: [
    new transports.File({ filename: 'logs/test.log' })
  ]
});
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
} else {
  new transports.File({ filename: 'logs/test.log' });
}

app.use(connectDatadog(dd_options));

app.get('/', (req, res) => {
  logger.info('A request had been received on /');
  res.send('Hello World in test mode!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));