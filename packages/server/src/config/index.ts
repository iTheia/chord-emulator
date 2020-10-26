import { IConfig } from './types';
import { dev } from './dev';
import { prod } from './prod';

export let config: IConfig = process.env.NODE_ENV === 'dev' ? dev : prod;
