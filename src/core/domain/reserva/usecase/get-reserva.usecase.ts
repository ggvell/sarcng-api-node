import { ReservaDto } from "src/core/service/dto/reserva.dto";

export interface GetReservaUsecase {
  execute(id: number): Promise<ReservaDto>;
}