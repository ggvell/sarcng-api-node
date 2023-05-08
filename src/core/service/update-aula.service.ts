import { Aula } from "../domain/aula/entity/aula";
import { AulaRepositoryPort } from "../domain/aula/port/repository/aula-repository.port";
import { UpdateAulaUsecase } from "../domain/aula/usecase/update-aula.usecase";
import { AulaDto } from "./dto/aula.dto";

export class UpdateAulaService implements UpdateAulaUsecase {
    constructor(private readonly repository: AulaRepositoryPort) {}
  
    public async execute(id: number, data: AulaDto): Promise<AulaDto> {
      const aula: Aula = await this.repository.getAula(id);
      aula.contentAttr = data.contentAttr;
      aula.dateAttr = data.dateAttr;
      await this.repository.putAula(aula);
      return new AulaDto(aula);
    }
  }