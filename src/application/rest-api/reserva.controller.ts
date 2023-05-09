import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from "@nestjs/common";
import { GetReservaUsecase } from "src/core/domain/reserva/usecase/get-reserva.usecase";
import { ReservaDto } from "src/core/service/dto/reserva.dto";
import { ReservaRepositoryPortDI } from "../di/reserva.token";
import { UpdateReservaUsecase } from "src/core/domain/reserva/usecase/update-reserva.usecase";
import { DeleteReservaUsecase } from "src/core/domain/reserva/usecase/delete-reserva.usecase";
import { PostReservaUsecase } from "src/core/domain/reserva/usecase/post-reserva.usecase";
import { CreateReservaEntityPayload } from "src/core/domain/reserva/entity/type/CreateReservaEntityPayload";

@Controller()
export class ReservaController {
  constructor(
    @Inject(ReservaRepositoryPortDI)
    private readonly getReservaUsecase: GetReservaUsecase,
    private readonly updateReservaUseCase: UpdateReservaUsecase,
    private readonly postReservaUseCase: PostReservaUsecase,
    private readonly deleteReservaUseCase: DeleteReservaUsecase,
  ) {}

  @Get(':id')
  getReserva(@Query("id") id: number): Promise<ReservaDto> {
    return this.getReservaUsecase.execute(id);
  }

  @Post()
  postReserva(@Body() reservaDto: ReservaDto, payload: CreateReservaEntityPayload): Promise<ReservaDto>{
    return this.postReservaUseCase.execute(reservaDto, payload);
  }

  @Put(':id')
  updateReserva(@Param("id") id: number, @Body() ReservaDto: ReservaDto): Promise<ReservaDto>{
    return  this.updateReservaUseCase.execute(id, ReservaDto);
  }

  @Delete(':id')
  deleteReserva(@Param("id") id : number): Promise<void> {
    return this.deleteReservaUseCase.execute(id);
  }
}