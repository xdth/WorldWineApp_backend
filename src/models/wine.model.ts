import {Entity, model, property} from '@loopback/repository';

@model()
export class Wine extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  designation?: string;

  @property({
    type: 'number',
  })
  points?: number;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
  })
  province?: string;

  @property({
    type: 'string',
  })
  region_1?: string;

  @property({
    type: 'string',
  })
  region_2?: string;

  @property({
    type: 'string',
  })
  taster_name?: string;

  @property({
    type: 'string',
  })
  taster_twitter_handle?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  variety?: string;

  @property({
    type: 'string',
  })
  winery?: string;


  constructor(data?: Partial<Wine>) {
    super(data);
  }
}

export interface WineRelations {
  // describe navigational properties here
}

export type WineWithRelations = Wine & WineRelations;
