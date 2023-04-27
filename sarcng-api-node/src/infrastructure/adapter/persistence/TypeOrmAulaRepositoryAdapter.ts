import { Aula } from "src/core/domain/aula/entity/aula";
import { AulaRepositoryPort } from "src/core/domain/aula/port/repository/aula-repository.port";

export class TypeOrmAulaRepositoryAdapter implements AulaRepositoryPort{
    getAula(id:number):Aula{
        throw new Error("Method not implemented.");
    }
}