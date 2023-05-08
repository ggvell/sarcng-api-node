import { Reserva } from "../../../../core/domain/reserva/entity/reserva";
import { TypeOrmReserva } from "./TypeOrmReserva";

export class TypeOrmReservaMapper {
  public static toOrmEntity(domain: Reserva): TypeOrmReserva {
    const ormReserva: TypeOrmReserva = new TypeOrmReserva();

    ormReserva.id = domain.getId();
    ormReserva.title = domain.getTitle();

    ormReserva.createdAt = domain.getCreatedAt();
    ormReserva.editedAt = domain.getEditedAt() as Date;
    ormReserva.publishedAt = domain.getPublishedAt() as Date;
    ormReserva.removedAt = domain.getRemovedAt() as Date;

    return ormReserva;
  }

  public static toDomainEntity(ormReserva: TypeOrmReserva): Reserva {
    const domain: Reserva = new Reserva({
      title: ormReserva.title,
      id: ormReserva.id,
      createdAt: ormReserva.createdAt,
      editedAt: ormReserva.editedAt,
      publishedAt: ormReserva.publishedAt,
      removedAt: ormReserva.removedAt,
    });

    return domain;
  }

  public static toDomainEntities(ormReservas: TypeOrmReserva[]): Reserva[] {
    return ormReservas.map((ormReserva) => this.toDomainEntity(ormReserva));
  }
}