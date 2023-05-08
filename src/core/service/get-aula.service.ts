import { Inject, Injectable } from "@nestjs/common";
import { AulaRepositoryPortDI } from "src/application/di/aula.token";
import { Aula } from "../domain/aula/entity/aula";
import { AulaRepositoryPort } from "../domain/aula/port/repository/aula-repository.port";
import { GetAulaUsecase } from "../domain/aula/usecase/get-aula.usecase";
import { AulaDto } from "./dto/aula.dto";

@Injectable()
export class GetAulaService implements GetAulaUsecase {
  constructor(
    @Inject(AulaRepositoryPortDI)
    private readonly repository: AulaRepositoryPort,
  ) {}

  public async execute(id: number): Promise<AulaDto> {
    const aula: Aula = await this.repository.getAula(id);
    return new AulaDto(aula);
  }
}