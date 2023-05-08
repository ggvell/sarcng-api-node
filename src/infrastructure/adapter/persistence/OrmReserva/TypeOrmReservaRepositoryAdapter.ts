import { Reserva } from "src/core/domain/reserva/entity/reserva";
import { ReservaRepositoryPort } from "src/core/domain/reserva/port/repository/reserva-repository.port";
import { EntityRepository, InsertResult } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { TypeOrmReserva } from "./TypeOrmReserva";
import { TypeOrmReservaMapper } from "./TypeOrmReservaMapper";

@EntityRepository(TypeOrmReserva)
export class TypeOrmReservaRepositoryAdapter
  extends BaseRepository<TypeOrmReserva>
  implements ReservaRepositoryPort
{
  private readonly reservaAlias: string = "Reserva";

  public async getReserva(id: number): Promise<Reserva> {
    throw new Error("Method not implemented.");
  }
  public async getAllReserva(): Promise<Reserva[]> {
    throw new Error("Method not implemented.");
  }
  public async putReserva(payload: Reserva): Promise<Reserva> {
    throw new Error("Method not implemented.");
  }
  public async postReserva(Reserva: Reserva): Promise<Reserva> {
    const ormReserva: TypeOrmReserva = TypeOrmReservaMapper.toOrmEntity(Reserva);

    const insertResult: InsertResult = await this.createQueryBuilder(
      this.reservaAlias,
    )
      .insert()
      .into(TypeOrmReserva)
      .values([ormReserva])
      .execute();

    return {
      id: insertResult.identifiers[0].id,
    };
  }
  public async deleteReserva(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}