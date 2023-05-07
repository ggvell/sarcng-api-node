import { Aula } from "src/core/domain/aula/entity/aula";
import { AulaRepositoryPort } from "src/core/domain/aula/port/repository/aula-repository.port";
import { EntityRepository, InsertResult } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { TypeOrmAula } from "./TypeOrmAula.ts";
import { TypeOrmAulaMapper } from "./TypeOrmAulaMapper";

@EntityRepository(TypeOrmAula)
export class TypeOrmAulaRepositoryAdapter
  extends BaseRepository<TypeOrmAula>
  implements AulaRepositoryPort
{
  private readonly aulaAlias: string = "aula";

  public async getAula(id: number): Promise<Aula> {
    throw new Error("Method not implemented.");
  }
  public async getAllAula(): Promise<Aula[]> {
    throw new Error("Method not implemented.");
  }
  public async putAula(payload: Aula): Promise<Aula> {
    throw new Error("Method not implemented.");
  }
  public async postAula(Aula: Aula): Promise<Aula> {
    const ormAula: TypeOrmAula = TypeOrmAulaMapper.toOrmEntity(Aula);

    const insertResult: InsertResult = await this.createQueryBuilder(
      this.AulaAlias,
    )
      .insert()
      .into(TypeOrmAula)
      .values([ormAula])
      .execute();

    return {
      id: insertResult.identifiers[0].id,
    };
  }
  public async deleteAula(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}