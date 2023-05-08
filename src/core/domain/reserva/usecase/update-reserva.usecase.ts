import { ReservaDto } from "src/core/service/dto/reserva.dto";

export interface UpdateReservaUsecase {
    execute(id: number, data: ReservaDto): Promise<ReservaDto>;
  }