import { AulaDto } from "src/core/service/dto/aula.dto";

export interface UpdateAulaUsecase {
    execute(id: number, data: AulaDto): Promise<AulaDto>;
  }