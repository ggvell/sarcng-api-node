import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from "@nestjs/common";
import { GetAulaUsecase } from "src/core/domain/aula/usecase/get-aula.usecase";
import { UpdateAulaUsecase } from "src/core/domain/aula/usecase/update-aula.usecase";
import { DeleteAulaUsecase } from "src/core/domain/aula/usecase/delete-aula.usecase";
import { PostAulaUsecase } from "src/core/domain/aula/usecase/post-aula.usecase";
import { AulaDto } from "src/core/service/dto/aula.dto";
import { AulaRepositoryPortDI } from "../di/aula.token";

@Controller()
export class AulaController {
  constructor(
    @Inject(AulaRepositoryPortDI)
    private readonly getAulaUsecase: GetAulaUsecase,
    private readonly updateAulaUseCase: UpdateAulaUsecase,
    private readonly postAulaUseCase: PostAulaUsecase,
    private readonly deleteAulaUseCase: DeleteAulaUsecase,
  ) {}

  @Get(':id')
  getAula(@Query("id") id: number): Promise<AulaDto> {
    return this.getAulaUsecase.execute(id);
  }

  @Post()
  postAula(@Body() AulaDto: AulaDto): Promise<AulaDto>{
    return this.postAulaUseCase.execute(AulaDto);
  }

  @Put(':id')
  updateAula(@Param("id") id: number, @Body() AulaDto: AulaDto): Promise<AulaDto>{
    return  this.updateAulaUseCase.execute(id, AulaDto);
  }

  @Delete(':id')
  deleteAula(@Param("id") id : number): Promise<void> {
    return this.deleteAulaUseCase.execute(id);
  }
}