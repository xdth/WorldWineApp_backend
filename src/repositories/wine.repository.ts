import {DefaultCrudRepository} from '@loopback/repository';
import {Wine, WineRelations} from '../models';
import {WinedbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WineRepository extends DefaultCrudRepository<
  Wine,
  typeof Wine.prototype.id,
  WineRelations
> {
  constructor(
    @inject('datasources.winedb') dataSource: WinedbDataSource,
  ) {
    super(Wine, dataSource);
  }
}
