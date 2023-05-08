import { AulaDto } from "src/core/service/dto/aula.dto";

export interface GetAulaUsecase {
  execute(id: number): AulaDto;
}