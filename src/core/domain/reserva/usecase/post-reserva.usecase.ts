import { ReservaDto } from "src/core/service/dto/reserva.dto";
import { CreateReservaEntityPayload } from "../entity/type/CreateReservaEntityPayload";

export interface PostReservaUsecase {
  execute(data: ReservaDto, payload: CreateReservaEntityPayload): Promise<ReservaDto>;
  }