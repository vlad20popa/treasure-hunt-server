export class CreateRaceDto {
  name: string;
  locationNumbers: number;
  photo: string;
  startingPosition: string;

  constructor(
    name: string,
    locationNumbers: number,
    photo: string,
    startingPosition: string,
  ) {
    this.name = name;
    this.locationNumbers = locationNumbers;
    this.photo = photo;
    this.startingPosition = startingPosition;
  }
}
