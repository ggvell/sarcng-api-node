import { Reserva } from "src/core/domain/reserva/entity/reserva";

export class ReservaDto {
  public idAttr: number;
  public contentAttr: string;
  public dateAttr: Date;

  constructor(entity: Reserva) {
    this.idAttr = entity.idAttr;
    this.contentAttr = entity.contentAttr;
    this.dateAttr = entity.dateAttr;
  }
}