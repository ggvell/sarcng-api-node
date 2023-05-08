import { Controller, Get, Inject, Query } from "@nestjs/common";
import { GetReservaUsecase } from "src/core/domain/reserva/usecase/get-reserva.usecase";
import { ReservaDto } from "src/core/service/dto/reserva.dto";
import { ReservaRepositoryPortDI } from "../di/reserva.token";
@Controller()
export class ReservaController {
  constructor(
    @Inject(ReservaRepositoryPortDI)
    private readonly getReservaUsecase: GetReservaUsecase,
  ) {}

  @Get()
  getReserva(@Query("id") id: number): ReservaDto {
    return this.getReservaUsecase.execute(id);
  }
}