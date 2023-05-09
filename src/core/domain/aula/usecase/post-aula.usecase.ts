import { AulaDto } from "src/core/service/dto/aula.dto";
import { CreateAulaEntityPayload } from "../entity/type/CreateAulaEntityPayload";

export interface PostAulaUsecase {
  execute(data: AulaDto, payload: CreateAulaEntityPayload): Promise<AulaDto>;
  }