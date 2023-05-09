import { Reserva } from "src/core/domain/reserva/entity/reserva";

export class ReservaDto {
  public idAttr: number;
  public observationAttr: string;
  public dateCreationAttr: Date;
  public dateValidityAttr: Date;

  constructor(entity: Reserva) {
    this.idAttr = entity.idAttr;
    this.observationAttr = entity.observationAttr;
    this.dateCreationAttr = entity.dateCreationAttr;
    this.dateValidityAttr = entity.dateValidityAttr;
  }
}