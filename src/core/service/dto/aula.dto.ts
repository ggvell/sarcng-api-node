import { Aula } from "src/core/domain/aula/entity/aula";

export class AulaDto {
  public idAttr: number;
  public contentAttr: string;
  public dateAttr: Date;

  constructor(entity: Aula) {
    this.idAttr = entity.idAttr;
    this.contentAttr = entity.contentAttr;
    this.dateAttr = entity.dateAttr;
  }
}