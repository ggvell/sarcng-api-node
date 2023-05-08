import { ReservaDto } from "src/core/service/dto/reserva.dto";

export interface PostReservaUsecase {
  execute(data: ReservaDto): Promise<ReservaDto>;
  }