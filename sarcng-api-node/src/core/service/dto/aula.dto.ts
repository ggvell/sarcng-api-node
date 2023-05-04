import { Aula } from "src/core/domain/aula/entity/aula";

export class AulaDto {
  public intAttr: number;
  public stringAttr: string;

  constructor(entity: Aula) {
    this.intAttr = entity.intAttr;
    this.stringAttr = entity.stringAttr;
  }
}