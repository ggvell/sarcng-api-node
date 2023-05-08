import { AulaRepositoryPort } from "../../domain/aula/port/repository/aula-repository.port";
import { DeleteAulaUsecase } from "../../domain/aula/usecase/delete-aula.usecase";


export class DeleteAulaService implements DeleteAulaUsecase {
    constructor(private readonly repository: AulaRepositoryPort) {}
  
    public async execute(id: number): Promise<void> {
      await this.repository.deleteAula(id);
    }
  }