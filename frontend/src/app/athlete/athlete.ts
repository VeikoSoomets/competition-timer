export class Athlete {
  id: number;
  name: string;
  chipId: number;
  startingNumber: number;

  constructor(properties?) {
    properties = properties ? properties : {};
    this.id = properties.id;
    this.name = properties.name;
    this.chipId = properties.chipId;
    this.startingNumber = properties.startingNumber;
  }
}
