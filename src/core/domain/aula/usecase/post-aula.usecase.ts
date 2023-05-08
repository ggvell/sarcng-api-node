import { AulaDto } from "src/core/service/dto/aula.dto";

export interface PostAulaUsecase {
  execute(data: AulaDto): Promise<AulaDto>;
  }