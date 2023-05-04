import { Controller, Get, Inject, Query } from "@nestjs/common";
import { GetAulaUsecase } from "src/core/domain/aula/usecase/get-aula.usecase";
import { AulaDto } from "src/core/service/dto/aula.dto";
import { AulaRepositoryPortDI } from "../di/aula.token";
@Controller()
export class AulaController {
  constructor(
    @Inject(AulaRepositoryPortDI)
    private readonly getAulaUsecase: GetAulaUsecase,
  ) {}

  @Get()
  getAula(@Query("id") id: number): AulaDto {
    return this.getAulaUsecase.execute(id);
  }
}