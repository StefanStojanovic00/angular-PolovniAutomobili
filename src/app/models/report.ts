import { Car } from './car';

export interface Report {
  id: number;
  text: string;
  status: string,
  car: Car;
}
