import { Inject, Injectable } from "@nestjs/common";
import { ReservaRepositoryPortDI } from "src/application/di/reserva.token";
import { Reserva } from "../../domain/reserva/entity/reserva";
import { ReservaRepositoryPort } from "../../domain/reserva/port/repository/reserva-repository.port";
import { GetReservaUsecase } from "../../domain/reserva/usecase/get-reserva.usecase";
import { ReservaDto } from "../dto/reserva.dto";

@Injectable()
export class GetReservaService implements GetReservaUsecase {
  constructor(
    @Inject(ReservaRepositoryPortDI)
    private readonly repository: ReservaRepositoryPort,
  ) {}

  public async execute(id: number): Promise<ReservaDto> {
    const Reserva: Reserva = await this.repository.getReserva(id);
    return new ReservaDto(Reserva);
  }
}