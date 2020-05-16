import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'winedb',
  connector: 'mysql',
  url: 'mysql://wine:wine@localhost/wine',
  host: 'localhost',
  port: 3306,
  user: 'wine',
  password: 'wine',
  database: 'wine'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class WinedbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'winedb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.winedb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
