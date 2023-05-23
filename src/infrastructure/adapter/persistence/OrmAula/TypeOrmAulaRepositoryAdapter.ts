import { Aula } from "src/core/domain/aula/entity/aula";
import { AulaRepositoryPort } from "src/core/domain/aula/port/repository/aula-repository.port";
import { EntityRepository, InsertResult } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { TypeOrmAula } from "./TypeOrmAula";
import { TypeOrmAulaMapper } from "./TypeOrmAulaMapper";

@EntityRepository(TypeOrmAula)
export class TypeOrmAulaRepositoryAdapter
  extends BaseRepository<TypeOrmAula>
  implements AulaRepositoryPort
{
  private readonly aulaAlias: string = "Aula";

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
      this.aulaAlias,
    )
      .insert()
      .into(TypeOrmAula)
      .values([ormAula])
      .execute();

    return {
      idAttr: insertResult.identifiers[0].idAttr,
      contentAttr: insertResult.identifiers[0].contentAttr,
      dateAttr: insertResult.identifiers[0].dateAttr,
    };
  }
  public async deleteAula(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}